import { styled } from "styled-components";

const StyledButton = styled.button`
  height: 30px;
  color: var(--color-grey-700);
  border: 1px solid var(--color-grey-300);
  background-color: var() (--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: var(--shodow-sm);
  margin-top: 10px;
`;

function Button({ children, onClick }) {
  return <StyledButton onClick={() => onClick()}>{children}</StyledButton>;
}

export default Button;
