import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import {
  LoginContainer,
  LoginSection,
  LoginHeader,
  SubmitButton,
  StyledField,
  Error,
  FormRow,
} from "./styles.js";

const Login = ({ setIsLoggedIn }) => {
    
  return (
    <LoginContainer id="login">
      <LoginSection>
        <LoginHeader>Admin panel login</LoginHeader>
        <Formik
          initialValues={{
            login: "",
            password: "",
          }}
          validationSchema={Yup.object({
            login: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={async (values, actions) => {
            try {
              const res = await axios.post(
                "http://localhost:4000/login",
                {
                  ...values,
                },
                { withCredentials: true }
              );
              if (res.data.errors) {
                const { login, password } = res.data.errors;
                if (login) console.log("wrong login");
                else if (password) console.log("wrong password");
              } else {
                setIsLoggedIn(true);
              }
            } catch (err) {
              console.log(err);
            }
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormRow>
                <label htmlFor="login">Login</label>
                <StyledField type="text" name="login" placeholder="admin" />

                <ErrorMessage name="login">
                  {(msg) => <Error>{msg}</Error>}
                </ErrorMessage>
              </FormRow>
              <FormRow>
                <label htmlFor="password">Password</label>
                <StyledField
                  type="password"
                  name="password"
                  placeholder="●●●●●"
                />
                <ErrorMessage name="password">
                  {(msg) => <Error>{msg}</Error>}
                </ErrorMessage>
              </FormRow>

              <SubmitButton type="submit" disabled={isSubmitting}>
                Log in
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </LoginSection>
    </LoginContainer>
  );
};

export default Login;
