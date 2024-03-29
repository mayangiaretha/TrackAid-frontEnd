import { TextField, styled } from '@mui/material';

import { COLORS } from '../../style/theme';

export const StyledTextField = styled(TextField)`
  height: 0.75rem;
  border-radius: 5rem;

  & .MuiOutlinedInput-root {
    border-radius: 3.125rem;
  }

  padding: ${({ theme }) => theme.spacing(5, 3)};

  & .MuiInputBase-root {
    border-radius: 150px;
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
