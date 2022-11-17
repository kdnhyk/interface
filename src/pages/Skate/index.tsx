import Header from "../../components/Header";
import styled from "styled-components";
import Map from "./Map";

const SkateBlock = styled.div``;

declare global {
  interface Window {
    naver: any;
  }
}

export default function Skate() {
  return (
    <SkateBlock>
      <Header />
      <Map />
    </SkateBlock>
  );
}
