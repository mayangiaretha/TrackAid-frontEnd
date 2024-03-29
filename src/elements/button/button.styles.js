import { Button, styled } from '@mui/material';

import { COLORS } from '../../style/theme';

export const StyledButton = styled(Button)`
  min-height: 2.5rem;
  padding: ${({ theme }) => theme.spacing(1, 3)};
  color: ${({ color }) =>
    color === 'primary'
      ? COLORS.BLUE
      : color === 'secondary'
        ? COLORS.ERROR
        : COLORS.WHITE_1};
  background-color: ${({ variant }) =>
    variant === 'outlined' ? COLORS.WHITE_1 : COLORS.BLUE};
  border-color: ${({ color }) =>
    color === 'primary' ? COLORS.BLUE : COLORS.ERROR};

  &:hover {
    border-color: ${({ color }) =>
      color === 'primary' ? COLORS.BLUE : COLORS.ERROR};
    background-color: ${({ variant }) =>
      variant === 'outlined' ? COLORS.WHITE_1 : COLORS.BLUE};
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
