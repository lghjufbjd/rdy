import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Login from "../Login";
import axios from "axios";
import ThemeForm from "../ThemeForm";

import {
  LogoutButton,
  AdminContainer,
  AdminSection,
  AdminHeader,
  AdminTab,
  AdminTabContainer,
  AdminElementsContainer,
} from "./styles";
const Admin = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const verifyUser = async () => {
    if (cookies.jwt) {
      const { data } = await axios.post(
        "http://localhost:4000/admin",
        {},
        { withCredentials: true }
      );
      if (!data.status) {
        removeCookie("jwt");
        setIsLoggedIn(false);
        navigate("/admin");
      } else {
        setIsLoggedIn(true);
      }
    } else {
      setIsLoggedIn(false);
    }
  };
  useEffect(() => {
    verifyUser();
  }, [cookies, removeCookie]);
  const logOut = () => {
    removeCookie("jwt");
    setIsLoggedIn(false);
    navigate("/");
  };
  const LoginScreen = () => {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  };
  const AdminScreen = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
      <AdminContainer id="admin-panel">
        <AdminSection>
          <AdminHeader>Admin panel</AdminHeader>
          <AdminTabContainer>
            <AdminTab active={activeTab === 1} onClick={() => setActiveTab(1)}>
              Edit Admin
            </AdminTab>
            <AdminTab active={activeTab === 2} onClick={() => setActiveTab(2)}>
              Edit Theme
            </AdminTab>
            <AdminTab active={activeTab === 3} onClick={() => setActiveTab(3)}>
              Reservations
            </AdminTab>
          </AdminTabContainer>
          <AdminElementsContainer>
            {activeTab === 1 ? (
              <>Admin</>
            ) : activeTab === 2 ? (
              <ThemeForm/>
            ) : activeTab === 3 ? (
              <>Reservations</>
            ) : null}
          </AdminElementsContainer>
        </AdminSection>
        <LogoutButton onClick={logOut}>logout</LogoutButton>
      </AdminContainer>
    );
  };
  return isLoggedIn ? <AdminScreen /> : <LoginScreen />;
};

export default Admin;
