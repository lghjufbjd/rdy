import styled from "styled-components";
import steak1 from "../../images/steaksquare1.webp";
import steak2 from "../../images/steaksquare2.webp";
import steak3 from "../../images/steaksquare3.webp";

const SteakTile = styled.div`
  width: 255px;
  height: 265px;
  border-radius: 10px;
  background-image: ${(props) =>
    props.no === 1
      ? `url(${steak1})`
      : props.no === 2
      ? `url(${steak2})`
      : `url(${steak3})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media screen and (max-height: 900px) {
    width: 215px;
    height: 225px;
  }
  @media screen and (max-height: 800px) {
    width: 195px;
    height: 205px;
  }
`;

const MenuContainer = styled.div`
  height: ${({ theme }) => theme.size.sectionHeight};
  min-height: 700px;
  max-height: 1070px;
  padding: ${({ theme }) => {
    return `${theme.padding.tb} ${theme.padding.rl} ${theme.padding.tb} ${theme.padding.rl}`;
  }};
  display: flex;
  align-items: center;
  @media screen and (max-width: 880px) {
    padding: ${({ theme }) => {
      return `${theme.padding.mtb} ${theme.padding.mrl} ${theme.padding.mtb} ${theme.padding.mrl}`;
    }};
  }
`;
const SteakTilesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 64px;
  @media screen and (max-width: 880px) {
    display: none;
  }
`;
const MenuSection = styled.section`
  height: 100%;
`;
const MenuHeader = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.header};
  line-height: 100%;
  letter-spacing: 0.075em;
  color: #202020;
  margin-bottom: 50px;
`;
const MenuTab = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.header};

  line-height: 100%;
  text-align: center;
  letter-spacing: 0.075em;
  cursor: pointer;
  color: ${(props) =>
    props.active
      ? ({ theme }) => theme.color.textBlack
      : ({ theme }) => theme.color.textBlackDisabled};
`;
const MenuTabContainer = styled.a`
  display: flex;
  justify-content: space-between;
  width: 312px;
  margin-bottom: 50px;
`;
const MenuElementsContainer = styled.p`
  height: fit-content;
  display: flex;
  flex-direction: column;
`;
const MenuElement = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.default};

  line-height: 230%;
  color: #000000;
`;

export {
  SteakTile,
  MenuContainer,
  SteakTilesContainer,
  MenuSection,
  MenuHeader,
  MenuTab,
  MenuTabContainer,
  MenuElementsContainer,
  MenuElement,
};
