import styled from '@emotion/styled';
import { Container as muiContainer } from '@mui/material';

import { Button } from '../../elements/button/index';
import { COLORS } from '../../style/theme';
export const StyledButton = styled(Button)`
  background: ${COLORS.BLUE};
`;

export const StyledContainer = styled(muiContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 100vh;
  background: #ffffff;
`;
export const StyledFormContainer = styled(muiContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f4f2;
  height: 33.5rem;
  border-radius: 0.938rem;
  width: 30rem;
  padding: 10px;
`;
