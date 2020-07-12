import React, { ReactElement, ReactNode } from "react";
import "./Button.scss";
import circle from "../../../../assets/add-circle-outline.svg";

interface ButtonProps {
  children?: ReactNode;
  onClick: () => void;
  className?: string;
  type?: "primary" | "secondary";
  showPlus?: boolean;
  disabled?: boolean;
}

const Button = ({
  className = "",
  onClick,
  children,
  type = "primary",
  showPlus = false,
  disabled = false
}: ButtonProps) => {
  return (
    <button className={`${className} button button-${type}`} onClick={onClick} disabled={disabled}>
      {children}
      {showPlus && <img src={circle} className="button-plus" />}
    </button>
  );
};

export default Button;
