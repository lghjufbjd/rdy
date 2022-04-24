import { Field } from "formik";
import styled from "styled-components";

const LoginContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: ${({ theme }) => theme.size.sectionHeight};
  min-height: 700px;
  max-height: 1070px;
  padding: ${({ theme }) => {
    return `${theme.padding.tb} ${theme.padding.rl} ${theme.padding.tb} ${theme.padding.rl}`;
  }};
  display: flex;
  justify-content: center;
  @media screen and (max-width: 880px) {
    padding: ${({ theme }) => {
      return `${theme.padding.mtb} ${theme.padding.mrl} ${theme.padding.mtb} ${theme.padding.mrl}`;
    }};
  }
`;
const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  justify-items: center;
  align-items: center;
  height: fit-content;
  padding: 25px;
  border: 3px ${({ theme }) => theme.color.primary} solid;
`;
const LoginHeader = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.header};
  line-height: 100%;
  letter-spacing: 0.075em;
  color: #202020;
  margin-bottom: 50px;
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
  display: flex;
  margin-inline: auto 0;
  width: fit-content;
`;
const SubmitButton = styled.button`
  cursor: pointer;
  width: 166px;
  height: 36px;
  background: #f6ad49;
  border-radius: 2px;
  border: 0;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.default};
  align-self: center;
  line-height: 164.9%;
  text-align: center;
  color: #ffffff;
  margin-top: 5%;
  @media screen and (max-width: 920px) {
    width: 100%;
  }
`;
const StyledField = styled(Field)`
  width: 277px;
  height: 43px;
  background: #ffffff;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
  border-radius: 2px;
  &::placeholder {
    color: #cdcdcd;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  LoginContainer,
  LoginSection,
  LoginHeader,
  SubmitButton,
  StyledField,
  Error,
  FormRow,
};
