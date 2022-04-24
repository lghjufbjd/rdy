import styled from "styled-components";
import { ReactComponent as FacebookIcon } from "../../images/facebookIcon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitterIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedinIcon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtubeIcon.svg";

const socialmediaBtmColorAndHover = `filter: invert(75%) sepia(90%) saturate(908%) hue-rotate(325deg)
brightness(103%) contrast(93%);
&:hover {
filter: invert(75%) sepia(90%) saturate(908%) hue-rotate(325deg)
  brightness(70%) contrast(93%);
}`;
const YoutubeIconColored = styled(YoutubeIcon)`
  height: 50px;
  width: 50px;
  transition: 0.1s filter linear;
  ${socialmediaBtmColorAndHover}
`;
const TwitterIconColored = styled(TwitterIcon)`
  height: 50px;
  width: 50px;
  transition: 0.1s filter linear;
  ${socialmediaBtmColorAndHover}
`;
const LinkedinIconColored = styled(LinkedinIcon)`
  height: 50px;
  width: 50px;
  transition: 0.1s filter linear;
  ${socialmediaBtmColorAndHover}
`;
const FacebookIconColored = styled(FacebookIcon)`
  height: 50px;
  width: 50px;
  transition: 0.1s filter linear;
  ${socialmediaBtmColorAndHover}
`;
const FooterContainer = styled.footer`
  height: 580px;
  padding: ${({ theme }) => {
    return `${theme.padding.tb} ${theme.padding.rl} ${theme.padding.tb} ${theme.padding.rl}`;
  }};
  display: flex;
  background: #433d3c;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 80px;
  @media screen and (max-width: 880px) {
    padding: ${({ theme }) => {
      return `${theme.padding.mtb} ${theme.padding.mrl} ${theme.padding.mtb} ${theme.padding.mrl}`;
    }};
  }
`;
const FooterHeader = styled.h4`
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.header};
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.075em;

  color: #ffffff;
`;
const ContactInfo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.default};
  line-height: 164.9%;
  text-align: center;
  color: #ffffff;
`;
const ContactInfoContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const SocialLinksContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

const ContactAddres = styled(ContactInfo)`
  width: 250px;
  height: 62px;
`;
const ContactPhone = styled(ContactInfo)`
  width: 108px;
  height: 42px;
`;
const ContactEmail = styled(ContactInfo)`
  width: 189px;
  height: 42px;
`;

const CopyrightName = styled.span`
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.default};
  line-height: 164.9%;
  color: rgba(237, 237, 237, 0.99);
`;
export {
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
  CopyrightName,
};
