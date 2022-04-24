import { useField, useFormikContext, ErrorMessage, Formik, Form } from "formik";
import { useRef, useEffect } from "react";
import axios from "axios";
import { isMobile } from "react-device-detect";
import * as Yup from "yup";
import {
  SubmitButton,
  StyledField,
  StyledDatePicker,
  StyledNumericInput,
  StyledForm,
  FormRow,
  Error,
} from "./styles.js";

const ReservationForm = () => {
  const pickerRef = useRef();
  useEffect(() => {
    if (isMobile && pickerRef.current !== null) {
      pickerRef.current.input.readOnly = true;
    }
  }, [isMobile, pickerRef]);

  const NumericInputField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);

    return (
      <StyledNumericInput
        {...field}
        {...props}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
      />
    );
  };
  const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    const defaultValue = new Date();
    return (
      <StyledDatePicker
        {...field}
        {...props}
        ref={pickerRef}
        showTimeSelect
        minDate={new Date()}
        dateFormat="M/d/yyyy h:mmaa"
        onChangeRaw={(e) => e.preventDefault()}
        selected={(field.value && new Date(field.value)) || null}
        defaultValue={defaultValue}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
      />
    );
  };
  return (
    <StyledForm>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          date: new Date().toLocaleDateString("en-US"),
          noGuests: 1,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid e-mail address")
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          phoneNumber: Yup.string()
            .matches(
              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              "Phone number is not valid"
            )
            .required("Required"),
          date: Yup.date().required("Required"),
          noGuests: Yup.number()
            .required("Required")
            .positive("Number of guests have to be positive")
            .max(6, "Max amount of tables is limited to 6"),
        })}
        onSubmit={ async (values, actions) => {
          try {
  

            const res = await axios.post(
              "http://localhost:4000/form",
              {
                ...values,
              },
              { withCredentials: true }
            );
            if (res.data.errors) {
            console.log("dasdsa")

              console.log(res.data.errors)
              // const { login, password } = res.data.errors;
              // if (login) console.log("wrong login");
              // else if (password) console.log("wrong password");
            } else {
              console.log("Mail sent")
            }
          } catch (err) {
            console.log(err);
          }
          
          setTimeout(() => {
            alert("You successfully reserved your table");
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormRow>
              <label htmlFor="firstName ">First Name</label>
              <StyledField type="text" name="firstName" placeholder="James" />

              <ErrorMessage name="firstName">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="lastName">Last Name</label>
              <StyledField type="text" name="lastName" placeholder="Smith" />
              <ErrorMessage name="lastName">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="email">E-mail</label>
              <StyledField
                type="text"
                name="email"
                placeholder="jamessmith@domain.com"
              />
              <ErrorMessage name="email">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="phoneNumber">Phone number</label>
              <StyledField
                type="text"
                name="phoneNumber"
                placeholder="+49 694 234 632"
              />
              <ErrorMessage name="phoneNumber">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="date">Date</label>
              <DatePickerField name="date" />
              <ErrorMessage name="date">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <FormRow>
              <label htmlFor="noGuests">Number of guests</label>
              <NumericInputField name="noGuests" />
              <ErrorMessage name="noGuests">
                {(msg) => <Error>{msg}</Error>}
              </ErrorMessage>
            </FormRow>
            <SubmitButton type="submit" disabled={isSubmitting}>
              RESERVE
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </StyledForm>
  );
};

export default ReservationForm;
