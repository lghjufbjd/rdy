import React, { useState, useEffect } from "react";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import About from "../About/index.js";
import Menu from "../Menu/index.js";
import Reservation from "../Reservation/index.js";

import {
  Separator,
  MainContainer,
  LayoutContainer,
  ScrollToTopBtn,
  ScrollToTopBtnContainer,
} from "./styles.js";

const Layout = () => {
  const [offset, setOffset] = useState(0);
  const [isVisible, setisVisible] = useState(false);
  if (offset >= 210 || offset < 220) {
    setTimeout(() => {
      if (offset >= 200) {
        setisVisible(true);
      } else setisVisible(false);
    }, 90);
  }
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <LayoutContainer>
      <Header />
      <Separator />
      <MainContainer>
        <Menu />
        <Separator />
        <About />
        <Separator />
        <Reservation />
      </MainContainer>
      <Footer />
      <ScrollToTopBtnContainer
        visibility={isVisible}
        animationType={offset > 210}
        to="header"
        spy={true}
        smooth={true}
        duration={10}
      >
        <ScrollToTopBtn />
      </ScrollToTopBtnContainer>
    </LayoutContainer>
  );
};
export default Layout;
