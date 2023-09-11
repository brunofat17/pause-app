import { styled } from "styled-components";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { useApp } from "../contexts/AppContext";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: var(--color-grey-800);
  color: var(--color-grey-100);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-700);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// const Span1 = styled.span`
//   color: var(--color-grey-100);
//   font-weight: 200;
//   font-size: 20px;
// `;

const StyledNavLink = styled(NavLink)`
  color: var(--color-grey-100);
  font-weight: 200;
  font-size: 14px;
  margin-top: 5px;
`;

function Header() {
  const { logInUserType, activeUserName, logout } = useApp();

  return (
    <StyledHeader>
      <span>{activeUserName && `Bem-vindo ${activeUserName}! 😎`}</span>

      {logInUserType === "" ? (
        <StyledNavLink to="/login">
          <AiOutlineLogin /> Log In
        </StyledNavLink>
      ) : (
        <StyledNavLink to="/logout" onClick={() => logout()}>
          <AiOutlineLogout /> Log out
        </StyledNavLink>
      )}
    </StyledHeader>
  );
}

export default Header;
