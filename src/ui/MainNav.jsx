import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { HiOutlineNewspaper, HiUsers } from "react-icons/hi2";
import { SiFranprix } from "react-icons/si";
import { LuDumbbell } from "react-icons/lu";
import { useApp } from "../contexts/AppContext";

  const StyledNavLink = styled(NavLink)`
    color: var(--color-grey-100);
    font-weight: 200;
    font-size: 18px;
  `;

  const Li = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    gap: 10px;
  `;

  const Ul = styled.ul``;

  const Span = styled.span`
    padding-bottom: 2px;
  `;
function MainNav() {

  const { logInUserType } = useApp();

  return (
    <Li>
      <Ul>
        <StyledNavLink to="/avaliação">
          <HiOutlineNewspaper /> Avaliação
        </StyledNavLink>
      </Ul>
      <Ul>
        <StyledNavLink to="/nutrição">
          <SiFranprix /> Nutrição
        </StyledNavLink>
      </Ul>
      {logInUserType === "admin" && (
        <Ul>
          <StyledNavLink to="/staff">
            <HiUsers /> Área Staff
          </StyledNavLink>
        </Ul>
      )}
      <Ul>
        <StyledNavLink to="/estúdio">
          <LuDumbbell /> <Span>Estúdio</Span>
        </StyledNavLink>
      </Ul>
    </Li>
  );
}

export default MainNav;
