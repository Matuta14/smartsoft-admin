import Button from '../../shared-components/button/button';
import Modal from '../../shared-components/modal/modal';
import { ConfirmModalStyled } from './confirmModal.styled';
import { modalProps } from './types';

export const ConfirmModal = ({
  isOpen,
  setIsOpen,
  onSubmit,
  text,
}: modalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ConfirmModalStyled>
        <span className="title">{text}</span>
        <div className="buttons-box">
          <Button
            text="Yes"
            buttonType="red"
            onClick={() => {
              onSubmit();
              setIsOpen(false);
            }}
          />
          <Button
            text="No"
            buttonType="green"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </ConfirmModalStyled>
    </Modal>
  );
};
