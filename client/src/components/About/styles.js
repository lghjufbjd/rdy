import styled from "styled-components";
import banner from "../../images/asBanner.webp";
import banner2 from "../../images/steaksquare3.webp";

const AboutSection = styled.section`
  height: 100%;
`;
const AboutHeader = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.header};

  line-height: 100%;
  letter-spacing: 0.075em;
  color: #202020;
  margin-bottom: 50px;
`;
const AboutContainer = styled.div`
  height: 410px;
  padding: ${({ theme }) => {
    return `${theme.padding.tb} ${theme.padding.rl} ${theme.padding.tb} ${theme.padding.rl}`;
  }};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 880px) {
    padding: ${({ theme }) => {
      return `${theme.padding.mtb} ${theme.padding.mrl} ${theme.padding.mtb} ${theme.padding.mrl}`;
    }};
  }
`;
const SteakBanner = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  margin-left: ${({ theme }) => theme.padding.rl};
  @media screen and (max-width: 1300px) {
    background-image: url(${banner2});
  }
  @media screen and (max-width: 1055px) {
    display: none;
  }
`;
const AboutText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${({ theme }) => theme.font.default};
  line-height: 160%;
  text-align: center;
  color: #000000;
  height: fit-content;
  @media screen and (max-width: 1055px) {
    width: 100%;
  }
`;
const AboutTextContainer = styled.div`
  height: 190px;
  display: flex;
  align-items: center;
`;

export {
  AboutSection,
  AboutHeader,
  AboutContainer,
  SteakBanner,
  AboutText,
  AboutTextContainer,
};
