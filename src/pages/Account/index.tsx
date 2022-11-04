import styled from "styled-components";
import Header from "../../components/Header";
import Login from "./Login";

const AccountBlock = styled.div``;

export default function Account() {
  return (
    <AccountBlock>
      <Header />
      <Login />
    </AccountBlock>
  );
}
