import { Button, styled } from '@mui/material';
import { COLORS } from '../../style/theme';

export const StyledButton = styled(Button)`
  min-height: 2.75rem;
  border-radius: 1.5rem;
  padding: ${({ theme }) => theme.spacing(0, 5)};
  ${({ variant }) => {
    if (variant === 'text') {
      return `background-color:${COLORS.BLACK_5}; color: ${COLORS.WHITE_1};  &:hover {
              background-color: ${COLORS.BLACK_6}; 
              }
        `;
    }
    return null;
  }}

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
