import { Field } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RNI from "react-numeric-input";
import styled from "styled-components";
const MenuElement = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.default};

  line-height: 230%;
  color: #000000;
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
  

  width: 22ch;
  height: 36px;
  background: #f6ad49;
  border-radius: 2px;
  border: 0;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.default};
  cursor: pointer;
  line-height: 164.9%;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;

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
const StyledDatePicker = styled(DatePicker)`
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
const StyledNumericInput = styled(RNI)`
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
const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const FormSplitContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: fit-content;
  padding-right: 50px;
`;

const FormRow = styled.div`
padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

export {
  SubmitButton,
  StyledField,
  StyledDatePicker,
  StyledNumericInput,
  StyledForm,
  FormRow,
  Error,
  FormSplitContainer,
  FormContainer,
  MenuElement,
};
