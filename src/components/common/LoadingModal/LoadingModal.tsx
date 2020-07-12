import React from 'react';
import './LoadingModal.scss';
import spinner from '../../../../assets/spinner.svg';

interface LoadingModalProps {
  className?: string;
}

const LoadingModal = ({ className = '' }: LoadingModalProps) => {
  return (
  <div className={`${className} loading-modal`}>
    <img src={spinner} className='loading-modal__spinner'/>
  </div>
  )
}

export default LoadingModal;
