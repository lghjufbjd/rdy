import styled from "styled-components";

const LogoutButton = styled.button`
  cursor: pointer;
  width: 22ch;
  height: 36px;
  background: #f6ad49;
  text-transform: uppercase;

  border-radius: 2px;
  border: 0;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.default};
  cursor: pointer;
  line-height: 164.9%;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 920px) {
    width: 100%;
  }
`;

const AdminContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: ${({ theme }) => theme.size.sectionHeight};
  height: 860px;
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

const AdminSection = styled.section`
  height: 100%;
`;
const AdminHeader = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.header};
  line-height: 100%;
  letter-spacing: 0.075em;
  color: #202020;
  margin-bottom: 50px;
`;
const AdminTab = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.header};
  margin-right: 20px;
  margin-left: 20px;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.075em;
  cursor: pointer;
  color: ${(props) =>
    props.active
      ? ({ theme }) => theme.color.textBlack
      : ({ theme }) => theme.color.textBlackDisabled};
  &:last-child {
    margin-right: 0px;
  }
  &:first-child {
    margin-left: 0px;
  }
`;
const AdminTabContainer = styled.a`
  display: inline-flex;
  justify-content: space-between;
  width: fit-content;
  margin-bottom: 50px;
  @media screen and (max-width: 730px) {
    width: 100%;
  }
`;
const AdminElementsContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export {
  LogoutButton,
  AdminContainer,
  AdminSection,
  AdminHeader,
  AdminTab,
  AdminTabContainer,
  AdminElementsContainer,
};
