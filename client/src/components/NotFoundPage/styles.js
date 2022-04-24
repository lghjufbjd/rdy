import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
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
const ErrorSection = styled.section`
  height: 100%;
`;
const ErrorHeader = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.header};
  line-height: 100%;
  letter-spacing: 0.075em;
  color: #202020;
  margin-bottom: 50px;
`;

const ErrorElementsContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
`;
const ErrorElement = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.default};

  line-height: 230%;
  color: #000000;
`;
const LinkStyled = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary};
`;

export {
  ErrorContainer,
  ErrorSection,
  ErrorHeader,
  ErrorElementsContainer,
  ErrorElement,
  LinkStyled,
};
