import React from 'react';
import './Dropdown.scss';

interface DropdownProps {
  className?: string;
  options: Array<string | number>;
  value: string | number;
  defaultValue?: string | number;
  onChange: (e: any) => void;
  placeholder?: string;
}

const Dropdown = ({ className = '', options, value, defaultValue='', onChange, placeholder = '' }: DropdownProps) => {
  return (
    <select className={`generic-dropdown ${className}`} value={value} onChange={onChange}>
    <option className="generic-option" value="" disabled hidden>Passion</option>
      {options.map((_option) => (
        <option className="generic-option" key={_option} value={_option}>
          {_option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
