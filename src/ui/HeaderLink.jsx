import { Link } from "react-router-dom";
import styled from "styled-components";

const A = styled.a`
  margin-right: 30px;
  vertical-align: bottom;
`;

function HeaderLink({ children, to }) {
  return <A href={to}>{children}</A>;
}

export default HeaderLink;
