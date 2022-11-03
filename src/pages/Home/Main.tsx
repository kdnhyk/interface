import styled from "styled-components";
import Poster from "../../components/Poster";

import Interface from "../../assets/IMG_3044.PNG";
import InterfaceArchive from "../../assets/IMG_3045.PNG";

const MainBlock = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function Main() {
  return (
    <MainBlock>
      <Poster alt="Interface" src={Interface}></Poster>
      <Poster alt="InterfaceArchive" src={InterfaceArchive}></Poster>
    </MainBlock>
  );
}
