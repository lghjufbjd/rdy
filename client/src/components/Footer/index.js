import React from "react";
import {
  YoutubeIconColored,
  TwitterIconColored,
  LinkedinIconColored,
  FacebookIconColored,
  FooterContainer,
  FooterHeader,
  ContactInfoContainer,
  SocialLinksContainer,
  ContactAddres,
  ContactPhone,
  ContactEmail,
  CopyrightName
} from "./styles.js";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterHeader>Contact</FooterHeader>
      <ContactInfoContainer>
        <ContactAddres>
          Addres: Street Address - 4627 Spadafore Drive City - Russell Zipcode -
          16345
        </ContactAddres>
        <ContactPhone>Phone number: +49 639 649 236</ContactPhone>
        <ContactEmail>E-mail: steakrestaurant@steak.com</ContactEmail>
      </ContactInfoContainer>
      <SocialLinksContainer>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FacebookIconColored aria-hidden="true" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <TwitterIconColored aria-hidden="true" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <YoutubeIconColored aria-hidden="true" />
        </a>
        <a href="https://linked.in" target="_blank" rel="noreferrer">
          <LinkedinIconColored aria-hidden="true" />
        </a>
      </SocialLinksContainer>
      <CopyrightName>Steak Restaurant&copy;</CopyrightName>
    </FooterContainer>
  );
};
export default Footer;
