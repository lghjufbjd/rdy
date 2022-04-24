import {ErrorMessage, Formik, Form } from "formik";
import axios from "axios";
import * as Yup from "yup";
import {
  SubmitButton,
  StyledField,
  FormSplitContainer,
  StyledForm,
  FormRow,
  Error,FormContainer
} from "./styles.js";
import { useEffect, useState } from "react";

const ThemeForm = () => {
    const [themeGET, setThemeGET] = useState(null);
useEffect(()=>{
    const fetchTheme = async () =>{
        try {
            const res = await axios.post(
              "http://localhost:4000/getTheme",
              { get: true },
              { withCredentials: true }
            );
            if (res.data.errors) {
              console.log("dasdsa");
              console.log(res.data.errors);
            } else {
                setThemeGET(res);
            }
          } catch (err) {
            console.log(err);
          }
    }
    fetchTheme()
},[setThemeGET])
console.log(themeGET)
  return (
    <StyledForm>
      <Formik
        initialValues={{
          primary: "",
          secondary: "",
          background: "",
          textWhite: "",
          textBlack: "",
          textBlackDisabled: "",
          default: "",
          header: "",
          medium: "",
          big: "",
          huge: "",
          tb: "",
          rl: "",
          mtb: "",
          mtb: "",
          sectionHeight: "",
        }}
        validationSchema={Yup.object({
          primary: Yup.string()
            .max(7, "Has to have 7 characters")
            .min(7, "Has to have 7 characters"),
          secondary: Yup.string()
            .max(7, "Has to have 7 characters")
            .min(7, "Has to have 7 characters"),
        })}
        onSubmit={async (values, actions) => {
          const theme = {
            color: {
              primary: values.primary,
              secondary: values.secondary,
              background: values.background,
              textWhite: values.textWhite,
              textBlack: values.textBlack,
              textBlackDisabled: values.textBlackDisabled,
            },
            font: {
              default: values.default,
              header: values.header,
              medium: values.medium,
              big: values.big,
              huge: values.huge,
            },
            padding: {
              tb: values.tb,
              rl: values.rl,
              mtb: values.mtb,
              mrl: values.mrl,
            },
            size: { sectionHeight: values.sectionHeight },
          };
          try {
            const res = await axios.post(
              "http://localhost:4000/updateTheme",

              { ...theme },
              { withCredentials: true }
            );
            if (res.data.errors) {
              console.log("dasdsa");
              console.log(res.data.errors);
            } else {
              console.log("git");
            }
          } catch (err) {
            console.log(err);
          }
          setTimeout(() => {
            alert("Theme updated");
            actions.setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
              <FormContainer>

              
              <FormSplitContainer>
                  
              <FormRow>
              <label htmlFor="primary">color-primary</label>
              <StyledField type="text" name="primary" placeholder=" " />
              <ErrorMessage name="primary">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="secondary">color-secondary</label>
              <StyledField type="text" name="secondary" placeholder=" " />
              <ErrorMessage name="secondary">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="background">color-background</label>
              <StyledField type="text" name="background" placeholder=" " />
              <ErrorMessage name="background">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="firstextWhitetName">color-firstextWhitetName</label>
              <StyledField type="text" name="textWhite" placeholder=" " />
              <ErrorMessage name="textWhite">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="textBlack">color-textBlack</label>
              <StyledField type="text" name="textBlack" placeholder=" " />
              <ErrorMessage name="textBlack">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="textBlackDisabled">color-textBlackDisabled</label>
              <StyledField type="text" name="textBlackDisabled" placeholder=" " />
              <ErrorMessage name="textBlackDisabled">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="default">font-default</label>
              <StyledField type="text" name="default" placeholder=" " />
              <ErrorMessage name="default">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="header">font-header</label>
              <StyledField type="text" name="header" placeholder=" " />
              <ErrorMessage name="header">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
              </FormSplitContainer>
              <FormSplitContainer>
            <FormRow>
              <label htmlFor="medium">font-medium</label>
              <StyledField type="text" name="medium" placeholder=" " />
              <ErrorMessage name="medium">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="big">font-big</label>
              <StyledField type="text" name="big" placeholder=" " />
              <ErrorMessage name="big">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="huge">font-huge</label>
              <StyledField type="text" name="huge" placeholder=" " />
              <ErrorMessage name="huge">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="tb ">padding-tb</label>
              <StyledField type="text" name="tb" placeholder=" " />
              <ErrorMessage name="tb">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="rl ">padding-rl</label>
              <StyledField type="text" name="rl" placeholder=" " />
              <ErrorMessage name="rl">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="mtb ">padding-mtb</label>
              <StyledField type="text" name="mtb" placeholder=" " />
              <ErrorMessage name="mtb">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="mrl ">padding-mrl</label>
              <StyledField type="text" name="mrl" placeholder=" " />
              <ErrorMessage name="mrl">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="sectionHeight ">size-sectionHeight</label>
              <StyledField type="text" name="sectionHeight" placeholder=" " />
              <ErrorMessage name="sectionHeight">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            </FormSplitContainer>
            </FormContainer>
            <SubmitButton type="submit" disabled={isSubmitting}>
              SAVE
            </SubmitButton>
            
          </Form>
        )}
      </Formik>
    </StyledForm>
  );
};

export default ThemeForm;
