import styled from "styled-components";
import headerbg from "../../images/headerbg.webp";

const HeaderContainer = styled.header`
  height: ${({ theme }) => theme.size.sectionHeight};
  min-height: 700px;
  max-height: 1070px;
  background-image: url(${headerbg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-right: ${({ theme }) => theme.padding.rl};
  padding-left: ${({ theme }) => theme.padding.rl};
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 880px) {
    padding-right: ${({ theme }) => theme.padding.mrl};
    padding-left: ${({ theme }) => theme.padding.mrl};
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;
const RestaurantName = styled.span`
  min-width: 11ch;
  max-width:100%;
  height: fit-content;
  font-weight: 700;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.huge};
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.075em;
  color: ${({ theme }) => theme.color.primary};
  
  margin-bottom: 20px;
  @media screen and (max-width: 940px) {
    
    margin-bottom: 15px;
    font-size: calc(${({ theme }) => theme.font.huge} - 1rem);
  }
  @media screen and (max-width: 740px) {
   
    font-size: calc(${({ theme }) => theme.font.huge} - 2rem);
  }
  @media screen and (max-width: 550px) {
    
    font-size: calc(${({ theme }) => theme.font.huge} - 3rem);
  }
`;
const RestaurantNameCaption = styled.span`
  text-transform: uppercase;
  width: 42ch;
  height: 27px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.big};

  font-weight: 00;
  line-height: 27px;
  color: ${({ theme }) => theme.color.textWhite};
  width: 100%;
  text-align: center;
`;
const RestaurantNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  @media screen and (max-width: 1200px) {
    margin-top: 80px;
  }
`;
const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: fit-content;
  margin-right: 150px;
  @media screen and (max-width: 1300px) {
    margin-right: 0;
  }
`;
export {
  HeaderContainer,
  RestaurantName,
  RestaurantNameCaption,
  RestaurantNameContainer,
  NameSection,
};
