import styled from "styled-components";
import Main from "./Main";
import Header from "../../components/Header";
import Banner from "./Banner";

const HomeBlock = styled.div`
  width: 100%;
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
      <Banner />
      <Main />
    </HomeBlock>
  );
}
