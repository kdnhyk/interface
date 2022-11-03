import styled from "styled-components";
import Main from "./Main";
import Header from "../../components/Header";
import { Teams } from "../../store/teams";

const HomeBlock = styled.div`
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Home() {
  return (
    <HomeBlock>
      <Header />
      <Main />
    </HomeBlock>
  );
}
