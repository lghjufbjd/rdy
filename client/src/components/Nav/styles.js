import styled from "styled-components";
import { Link } from "react-scroll";

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.big};
  font-weight: bold;
  color: ${({ theme }) => theme.color.textWhite};
  &:hover {
    cursor: pointer;
  }
`;
const NavContainer = styled.nav`
  height: 100%;
  width: 150px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1200px) {
    align-self: flex-start;
  }
`;
const LinkContainer = styled.div`
  width: 100px;
  display: flex;
  height: 290px;
  flex-direction: column;
  justify-content: space-between;
`;

export { StyledLink, NavContainer, LinkContainer };
