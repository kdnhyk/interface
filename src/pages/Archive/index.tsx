import styled from "styled-components";
import Header from "../../components/Header";
import Banner from "./Banner";
import Main from "./Main";

const ArchiveBlock = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  color: white;
`;

export default function Archive() {
  return (
    <ArchiveBlock>
      <Header userName="강동혁" teamColor="#B92EDC" />
      <Banner />
      <Main />
    </ArchiveBlock>
  );
}
