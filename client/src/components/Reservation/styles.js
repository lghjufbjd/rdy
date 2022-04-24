import styled from "styled-components";

const ReservationContainer = styled.div`
  height: ${({ theme }) => theme.size.sectionHeight};
  min-height: 700px;
  max-height: 1070px;
  padding: ${({ theme }) => {
    return `${theme.padding.tb} ${theme.padding.rl} ${theme.padding.tb} ${theme.padding.rl}`;
  }};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 880px) {
    padding: ${({ theme }) => {
      return `${theme.padding.mtb} ${theme.padding.mrl} ${theme.padding.mtb} ${theme.padding.mrl}`;
    }};
  }
`;
const ReservationHeader = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.header};
  line-height: 100%;
  letter-spacing: 0.075em;
  color: #202020;
  margin-bottom: 50px;
`;
const ReservationFormContainer = styled.div`
  height: 100%;
  @media screen and (max-width: 500px) {
    padding-bottom: 8vh;
  }
`;
const QuoteContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 920px) {
    display: none;
  }
`;
const QuoteText = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.default};
  line-height: 164.9%;
  text-align: center;
  max-width: 45vw;
  width: 45vw;
  padding-right: 2vh;
  padding-left: 2vh;
  color: #8b8b8b;
`;
const Quote = styled.div`
  margin-bottom: 7vh;
  text-align: center;
  position: relative;
  &::before {
    content: "";
    top: -13px;
    left: 0;
  }
  &::after {
    content: "";
    bottom: -13px;
    left: 0;
    @media screen and (max-width: 1632px) {
      bottom: -35px;
    }
  }
  &::before,
  &::after {
    position: absolute;
    min-width: 45vw;
    height: 3px;
    background: #f6ad49;
    text-align: center;
    position: absolute;
  }
`;
const ReservationInnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export {
  ReservationContainer,
  ReservationHeader,
  ReservationFormContainer,
  QuoteContainer,
  QuoteText,
  Quote,
  ReservationInnerContainer,
};
