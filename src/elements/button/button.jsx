import { StyledButton } from './button.styles';

export const Button = ({ width, children, ...props }) => {
  return (
    <StyledButton width={width} {...props}>
      {children}
    </StyledButton>
  );
};
