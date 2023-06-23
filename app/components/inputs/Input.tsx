'use client';

import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

interface InputProps {
  id: string;
  label: string;
  type?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  required,
  register,
  errors,
  disabled,
}) => {
  return <div>Input</div>;
};

export default Input;
