import React from 'react';
import './TextInput.scss';

interface TextInputProps {
  className?: string;
  placeholder?: string;
  onChange: (e: any) => void;
  value: string | number;
}

const TextInput = ({
  className = '',
  placeholder = '',
  onChange,
  value,
}: TextInputProps) => {
  return (
    <input
      className={`${className} generic-input`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default TextInput;
