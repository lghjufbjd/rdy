import React from "react";
import Nav from "../Nav";
import {
  HeaderContainer,
  RestaurantName,
  RestaurantNameCaption,
  RestaurantNameContainer,
  NameSection,
} from "./styles.js";

const Header = () => {
  return (
    <HeaderContainer id="header">
      <Nav />
      <NameSection>
        <RestaurantNameContainer>
          <RestaurantName>Steak Restaurant</RestaurantName>
          <RestaurantNameCaption>
            Get premium steaks 24/7 in our restaurants
          </RestaurantNameCaption>
        </RestaurantNameContainer>
      </NameSection>
    </HeaderContainer>
  );
};
export default Header;
