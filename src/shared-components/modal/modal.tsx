import { ModalBody, ModalOverlay } from './modal.styled';
import { ModalProps } from './types';

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <span className="close-icon" onClick={onClose}>
          ✖
        </span>
        {children}
      </ModalBody>
    </ModalOverlay>
  );
};

export default Modal;
