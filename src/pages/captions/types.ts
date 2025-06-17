import { wordResponse } from 'api/types';

export type editModalProps = {
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
  selectedWord: wordResponse | null;
  onSubmit: (values: wordFormData, id: string) => void;
};
export type wordFormData = {
  national: string;
  foreign: string;
};

export type AddWordFormData = {
  national: string;
  foreign: string;
};
