import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  ErrorContainer,
  ErrorSection,
  ErrorHeader,
  ErrorElementsContainer,
  ErrorElement,
  LinkStyled
} from "./styles.js";


const NotFoundPage = () => {
let navigate = useNavigate();

  useEffect(() => {
    navigate("../404", { replace: true })
  }, [navigate]);
  return (
    <ErrorContainer id="error">
      <ErrorSection>
        <ErrorHeader>Error 404</ErrorHeader>
        <ErrorElementsContainer>
          <ErrorElement>
            It looks like you've reached a URL that doesn’t exist. Please click{" "}
            <LinkStyled to="/">here</LinkStyled> if you want to visit homepage.
          </ErrorElement>
        </ErrorElementsContainer>
      </ErrorSection>
    </ErrorContainer>
  );
};

export default NotFoundPage;
