import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

  const StyledLogo = styled.img`
    width: 300px;
    align-items: center;
  `;
function Logo() {

  return (
    <NavLink to="/homepage">
      <StyledLogo src="images/logo-pause-white.jpg" alt="logo-white" />
    </NavLink>
  );
}

export default Logo;
