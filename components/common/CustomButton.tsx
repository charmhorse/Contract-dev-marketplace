// components/TextInputField.tsx

import React from 'react';
import Button from '@mui/material/Button';

// Define the props interface for the CustomButton component
interface CustomButtonProps {
  id: string;
  label: string;
  variant?: 'standard' | 'filled' | 'outlined';
  // Other props can be added here if needed
}

// Define the type for the props of the Button component
type ButtonProps = React.ComponentProps<typeof Button>;

// Combine CustomButtonProps and ButtonProps
type CombinedProps = CustomButtonProps & ButtonProps;

// Define the CustomButton component
const CustomButton: React.FC<CombinedProps> = ({ id, label, variant = 'outlined', ...rest }) => {
  return (
    <Button variant={variant} {...rest}>
      {label}
    </Button>
  );
};

export default CustomButton;
