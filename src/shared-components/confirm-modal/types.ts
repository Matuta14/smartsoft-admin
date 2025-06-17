export type modalProps = {
  isOpen: boolean;
  text: string;
  setIsOpen: (e: boolean) => void;
  onSubmit: () => void;
};
