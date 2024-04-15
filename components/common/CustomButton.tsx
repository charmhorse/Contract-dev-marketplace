
import React, { useEffect } from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  id: string;
  label: string;
}

type ButtonProps = React.ComponentProps<typeof Button>;

type CombinedProps = CustomButtonProps & ButtonProps;

const CustomButton: React.FC<CombinedProps> = ({ id, label, ...rest }) => {
  return (
    <>
    <Button {...rest}>
      {label}
    </Button>
    </>
  );
};

export default CustomButton;
