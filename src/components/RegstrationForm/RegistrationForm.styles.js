import styled from '@emotion/styled';
import { Container as muiContainer } from '@mui/material';
import { COLORS } from '../../style/theme';

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
  justify-content: flex-start;
  align-items: start;
  background: ${COLORS.GREY_5};
  height: 33.5rem;
  border-radius: 0.938rem;
  width: 30rem;
  padding-top: 4rem;
`;
