import { InputBaseComponentProps } from '@material-ui/core';
import { alpha, styled, SxProps, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import React, { ReactNode } from 'react';

const StylingTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#6366f1',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#6366f1',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#6366f1',
    },
    '&:hover fieldset': {
      borderColor: '#6366f1',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6366f1',
    },
  },
});

type variantTypes = 'standard' | 'filled' | 'outlined' | undefined;

interface StylingMeterialInputType {
  id: string;
  label: string;
  variant: variantTypes;
  className?: string;
  sx?: SxProps<Theme>;
  inputProps?: InputBaseComponentProps;
}

const StylingMeterialInput = ({
  id,
  label,
  variant,
  className,
  sx,
  inputProps,
}: StylingMeterialInputType) => {
  return (
    <StylingTextField
      id={id}
      label={label}
      variant={variant}
      className={className}
      sx={sx}
      inputProps={inputProps}
    />
  );
};

export default StylingMeterialInput;
