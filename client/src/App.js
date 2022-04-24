import "./App.css";
import { ThemeProvider } from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Admin from "./components/Admin/";
import NotFoundPage from "./components/NotFoundPage";
const theme = {
  color: {
    primary: "#F6AD49",
    secondary: "#433D3C",
    background: "#FFFBF9",
    textWhite: "#FCFCFC",
    textBlack: "#202020",
    textBlackDisabled: "#CDCDCD",
  },
  font: {
    default: "0.813rem",
    header: "1rem",
    medium: "1.188rem",
    big: "1.188rem",
    huge: "5.5rem",
  },

  padding: {
    tb: "44px",
    rl: "55px",
    mtb: "5vw",
    mrl: "6vw",
  },

  size: {
    sectionHeight: "100vh",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
