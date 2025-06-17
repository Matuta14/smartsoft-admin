import { wordResponse } from '../../api/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../shared-components/button/button';
import Input from '../../shared-components/input/input';
import Modal from '../../shared-components/modal/modal';
import { useEffect } from 'react';
import { EditModalStyled } from './captions.styled';
import { editModalProps, wordFormData } from './types';

export const EditModal = ({
  isOpen,
  setIsOpen,
  selectedWord,
  onSubmit,
}: editModalProps) => {
  const { register, handleSubmit, setValue } = useForm<wordFormData>({
    defaultValues: {
      national: selectedWord?.national || '',
      foreign: selectedWord?.foreign || '',
    },
  });

  const handleEdit: SubmitHandler<wordFormData> = (values) => {
    if (selectedWord) onSubmit(values, selectedWord._id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedWord) {
      setValue('national', selectedWord.national);
      setValue('foreign', selectedWord.foreign);
    }
  }, [selectedWord, setValue]);
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <EditModalStyled>
        <form onSubmit={handleSubmit(handleEdit)}>
          <span className="title">Edit Word</span>
          <Input
            placeholder="National"
            {...register('national', { required: 'Username is required' })}
          />
          <Input
            placeholder="Foreign"
            {...register('foreign', { required: 'Password is required' })}
          />

          <Button type="submit" text="Add Word" />
        </form>
      </EditModalStyled>
    </Modal>
  );
};
