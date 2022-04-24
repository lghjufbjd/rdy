import React from "react";
import { ReactComponent as ReactLogo } from "../../images/steakicon.svg";
import { StyledLink, NavContainer, LinkContainer } from "./styles.js";

const Nav = () => {
  return (
    <NavContainer>
      <LinkContainer>
        <StyledLink  to="header">
          <ReactLogo alt="" />
        </StyledLink>
        <StyledLink
          to="menu"
          spy={true}
          smooth={true}
          duration={200}
        >
          Menu
        </StyledLink>
        <StyledLink
          to="about"
          spy={true}
          smooth={true}
          offset={-290}
          duration={200}
        >
          About
        </StyledLink>
        <StyledLink
          to="reservation"
          spy={true}
          smooth={true}
          duration={200}
        >
          Booking
        </StyledLink>
        <StyledLink
          to="contact"
          spy={true}
          smooth={true}
          duration={200}
        >
          Contact
        </StyledLink>
      </LinkContainer>
    </NavContainer>
  );
};
export default Nav;
