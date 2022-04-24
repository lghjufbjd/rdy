import styled, { keyframes } from "styled-components";
import { ReactComponent as UpIcon } from "../../images/up-arrow.svg";
import { Link } from "react-scroll";

const DisappearAnimation = keyframes`
  0%{
    opacity: 1;
  }
  25%{
    opacity: 0.75;
  }
  50%{
    opacity: 0.5;
  }
  75%{
    opacity: 0.25;
  }
  100%{
    
    opacity: 0;
    display: none;
  }
`;
const AppearAnimation = keyframes`
  0%{
    opacity: 0;
  }
  25%{
    opacity: 0.25;
  }
  50%{
    opacity: 0.5;
  }
  75%{
    opacity: 0.75;
  }
  100%{
  
    opacity: 1;
      display: flex;
  }
`;

const ScrollToTopBtn = styled(UpIcon)`
  height: 13px;
  width: 13px;
`;
const ScrollToTopBtnContainer = styled(Link)`
  transition: 0.1s background-color linear;
  padding: 9px;
  position: fixed;
  bottom: 80px;
  right: 15px;
  height: 33px;
  width: 33px;
  display: ${(props) => (props.visibility ? "flex" : "none")};
  justify-content: center;
  align-content: center;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 999px;
  box-shadow: 11px 14px 29px -15px rgba(41, 41, 45, 0.46);
  &:hover {
    background-color: #af7834;
  }
  animation: ${(props) =>
      props.animationType ? AppearAnimation : DisappearAnimation}
    0.2s linear;
`;
const Separator = styled.header`
  height: 17px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
`;
const MainContainer = styled.main``;

const LayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background};
`;

export {
  Separator,
  MainContainer,
  LayoutContainer,
  ScrollToTopBtn,
  ScrollToTopBtnContainer,
};
