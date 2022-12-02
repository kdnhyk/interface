import styled from "styled-components";
import Header from "../../components/Header";
import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";

const AccountBlock = styled.div``;

export default function Account() {
  return (
    <AccountBlock>
      <Header />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </AccountBlock>
  );
}
