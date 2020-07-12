import React from 'react';
import './DeleteIcon.scss';
import deleteIcon from '../../../../assets/close-outline.svg';

interface DeleteIconProps {
  className?: string;
  onClick?: () => void;
}

const DeleteIcon = ({
  className = '',
  onClick = () => {},
}: DeleteIconProps) => {
  return (
    <img
      src={deleteIcon}
      className={`${className} delete-icon`}
      onClick={onClick}
    />
  );
};

export default DeleteIcon;
