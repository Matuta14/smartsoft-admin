import { AddWordBox, CaptionsStyled, TableBox } from './captions.styled';

import { useForm } from 'react-hook-form';
import {
  addWord,
  deleteWord,
  editWord,
  getAllWords,
} from '../../api/requests.tsx';
import { wordResponse, wordType } from '../../api/types.ts';
import Input from '../../shared-components/input/input.tsx';
import Button from '../../shared-components/button/button.tsx';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { Table } from '../../shared-components/table/table.tsx';
import { WordColumns } from './constants.ts';
import { EditModal } from './editModal.tsx';
import { ConfirmModal } from '../../shared-components/confirm-modal/confirmModal.tsx';
import { ContentLayoutStyled } from '../../shared-components/styled.ts';
import { useNavigate } from 'react-router-dom';
import Loader from '../../shared-components/loader/loader.tsx';
import { AddWordFormData } from './types.ts';

export const CaptionsPage = () => {
  const { register, handleSubmit } = useForm<AddWordFormData>();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [wordLoading, setWordLoading] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);

  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [selectedWord, setSelectedWord] = useState<wordResponse | null>(null);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['words'],
    queryFn: getAllWords,
  });

  const addWordMutation = useMutation<
    AxiosResponse<wordResponse>,
    Error,
    wordType
  >({
    mutationFn: addWord,
    onSuccess: (e: any) => {
      //Should be corrected from back
      if (e.data.errorMessage) {
        setError(e.data.errorMessage);
      } else {
        setError(null);
      }
      refetch();
    },
    onSettled: () => {
      setWordLoading(false);
    },
  });

  const onSubmit = (values: wordType) => {
    setWordLoading(true);
    addWordMutation.mutate(values);
  };

  const editWordMutation = useMutation<
    AxiosResponse<wordResponse>,
    Error,
    { id: string; word: wordType }
  >({
    mutationFn: ({ id, word }) => editWord(id, word),
    onSuccess: () => {
      refetch();
    },
  });

  const onEdit = (wordRow: wordResponse) => {
    setSelectedWord(wordRow);
    setEditOpen(true);
  };

  const deleteWordMutation = useMutation<
    AxiosResponse<wordResponse>,
    Error,
    { id: string }
  >({
    mutationFn: ({ id }) => deleteWord(id),
    onSuccess: () => {
      refetch();
    },
  });
  const onDelete = (wordRow: wordResponse) => {
    setSelectedWord(wordRow);
    setDeleteOpen(true);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, []);

  return (
    <ContentLayoutStyled>
      <CaptionsStyled>
        <AddWordBox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputs">
              <Input
                placeholder="Enter foreign"
                {...register('foreign', { required: 'Foreign is required' })}
              />
              <Input
                placeholder="Enter national"
                {...register('national', { required: 'National is required' })}
              />
            </div>
            <Button type="submit" text="Add Word" loading={wordLoading} />
          </form>
          {error && <span className="error">{error}</span>}
        </AddWordBox>

        <TableBox>
          {isLoading ? (
            <div className="loader-box">
              <Loader />
            </div>
          ) : (
            <Table
              columns={WordColumns}
              data={data?.data.words || []}
              editFn={onEdit}
              deleteFn={onDelete}
            />
          )}
        </TableBox>
        <EditModal
          isOpen={isEditOpen}
          onSubmit={(data, id) => editWordMutation.mutate({ id, word: data })}
          selectedWord={selectedWord}
          setIsOpen={setEditOpen}
        />
        <ConfirmModal
          text="Delete Word?"
          isOpen={isDeleteOpen}
          setIsOpen={setDeleteOpen}
          onSubmit={() =>
            deleteWordMutation.mutate({ id: selectedWord?._id || '' })
          }
        />
      </CaptionsStyled>
    </ContentLayoutStyled>
  );
};

export default CaptionsPage;
