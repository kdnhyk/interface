import Header from "../../components/Header";
import styled from "styled-components";
import Map from "./Map";
import SortButton from "../../components/SortButton";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import Starter from "./Starter";
import Fashion from "./Fashion";

const SkateBlock = styled.div``;

const MainBlock = styled.div``;

const SortButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 10px 0px 10px;
  box-sizing: border-box;

  display: flex;
  gap: 1px;
`;

declare global {
  interface Window {
    naver: any;
  }
}

export default function Skate() {
  const nav = useNavigate();
  const [selectedPage, setSelectedPage] = useState("starter");
  const onClickSortButton = (page: string) => {
    setSelectedPage(page);
    nav(page);
  };
  const sortButtonBackgroundColor = (page: string) => {
    if (page === selectedPage) {
      return "black";
    } else {
      return "#A0A0A0";
    }
  };

  return (
    <SkateBlock>
      <Header />
      <SortButtonWrapper>
        <SortButton
          onClick={() => onClickSortButton("starter")}
          backgroundColor={sortButtonBackgroundColor("starter")}
        >
          입문
        </SortButton>
        <SortButton
          onClick={() => onClickSortButton("tricks")}
          backgroundColor={sortButtonBackgroundColor("tricks")}
        >
          트릭
        </SortButton>
        {/* <SortButton
          onClick={() => onClickSortButton("map")}
          backgroundColor={sortButtonBackgroundColor("map")}
        >
          스팟
        </SortButton> */}
        <SortButton
          onClick={() => onClickSortButton("fashion")}
          backgroundColor={sortButtonBackgroundColor("fashion")}
        >
          의류
        </SortButton>
      </SortButtonWrapper>
      <MainBlock>
        <Routes>
          {/* <Route path="" element={<Main />} /> */}
          <Route path="starter" element={<Starter />} />
          {/* <Route path="map" element={<Map />} /> */}
          <Route path="fashion" element={<Fashion />} />
        </Routes>
      </MainBlock>
    </SkateBlock>
  );
}
