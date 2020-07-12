import React, { ReactNode } from 'react';
import './ConfirmationModal.scss';
import Button from '../Button/Button';

interface ConfirmationModalProps {
  isShown: boolean;
  className?: string;
  confirmAction: () => void;
  dismissAction: () => void;
}

const ConfirmationModal = ({
  isShown,
  className = '',
  confirmAction,
  dismissAction
}: ConfirmationModalProps) => {
  return (
    <>
      {isShown ? (
        <div className={`${className} confirmation-modal`}>
          <div className="confirmation-modal__inner-title">
            Are you sure?
            <span className="confirmation-modal__inner-buttons">
              <Button className="confirmation-modal__inner-buttons-button" onClick={() => {confirmAction(); dismissAction()}}>Yes</Button>
              <Button className="confirmation-modal__inner-buttons-button" onClick={() => dismissAction()}>No</Button>
            </span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ConfirmationModal;
