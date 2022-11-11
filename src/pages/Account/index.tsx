import styled from "styled-components";
import Header from "../../components/Header";
import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route, useNavigate } from "react-router-dom";
import { authSelector } from "../../store/Auth";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";

const AccountBlock = styled.div``;

export default function Account() {
  const [auth, setAuth] = useRecoilState(authSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.user) {
      navigate("/account/login");
    }
  }, []);

  return (
    <AccountBlock>
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </AccountBlock>
  );
}
