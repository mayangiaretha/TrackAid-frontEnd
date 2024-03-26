import { Button, styled } from '@mui/material';

import { COLORS } from '../../style/theme';

export const StyledButton = styled(Button)`
  min-height: 2.5rem;
  padding: ${({ theme }) => theme.spacing(1, 3)};
  color: ${COLORS.WHITE_1};
  background-color: ${COLORS.BLUE};

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
