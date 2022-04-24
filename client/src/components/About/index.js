import React from "react";
import {
  AboutSection,
  AboutHeader,
  AboutContainer,
  SteakBanner,
  AboutText,
  AboutTextContainer,
} from "./styles.js";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutSection>
        <AboutHeader>About</AboutHeader>
        <AboutTextContainer>
          <AboutText>
            “We set our goal to serve exquisite and authentic steaks from
            different cultures and legendary premium meats with some wine to
            drink.
            <br />
            We add creative touch to our meals, delivering a distinctly unique
            dining experience to fulfill our guest expectations.”
          </AboutText>
        </AboutTextContainer>
      </AboutSection>
      <SteakBanner />
    </AboutContainer>
  );
};
export default About;
