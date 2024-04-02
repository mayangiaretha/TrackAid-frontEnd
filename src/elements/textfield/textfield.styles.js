import { TextField, styled } from '@mui/material';

import { COLORS } from '../../style/theme';

export const StyledTextField = styled(TextField)`
  height: 0.75rem;
  

  padding: ${({ theme }) => theme.spacing(5, 3)};

  & .MuiInputBase-root {
    width: ${({ width }) => width};
  }

  &.Mui-disabled {
    ${({ disabled, variant }) => {
      if (disabled) {
        if (variant === 'outlined') {
          return `color: ${COLORS.GREY_2}`;
        }
        if (variant === 'contained') {
          return `background-color: ${COLORS.GREY_4}; color: ${COLORS.GREY_2}`;
        }
      }
      return null;
    }}
  }
`;
