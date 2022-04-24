import React from "react";
import ReservationForm from "../ReservationForm";
import {
  ReservationContainer,
  ReservationHeader,
  ReservationFormContainer,
  QuoteContainer,
  QuoteText,
  Quote,
  ReservationInnerContainer,
} from "./styles.js";

const Reservation = () => {
  return (
    <ReservationContainer id="reservation">
      <ReservationHeader>RESERVE YOUR TABLE</ReservationHeader>
      <ReservationInnerContainer>
        <ReservationFormContainer>
          <ReservationForm />
        </ReservationFormContainer>
        <QuoteContainer>
          <Quote>
            <QuoteText>
              “Looking for the perfect accompaniment to your gorgeous dinner?
              Viewour Wine List or premium steaks.”
            </QuoteText>
          </Quote>
        </QuoteContainer>
      </ReservationInnerContainer>
    </ReservationContainer>
  );
};
export default Reservation;
