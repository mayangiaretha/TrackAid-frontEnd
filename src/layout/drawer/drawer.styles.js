import { styled } from '@mui/material/styles';
import { List } from '@mui/material';

import { COLORS } from '../../style/theme';
export const StyledList = styled(List)`
  text-decoration: none;
  color: ${COLORS.GREY_1};
`;

export const ContentLink = styled(List)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: ${COLORS.BLUE};
  margin-top: 400px;
  cursor: pointer;
`;
