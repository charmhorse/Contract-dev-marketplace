// components/TextInputField.tsx

import React from 'react';
import { TextField } from '@mui/material';

interface TextInputFieldProps {
  id: string;
  label: string;
  variant?: 'standard' | 'filled' | 'outlined';
  // Define other props here if needed
}

const TextInputField: React.FC<TextInputFieldProps> = ({ id, label, variant = 'filled', ...rest }) => {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      {...rest}
    />
  );
};

export default TextInputField;
