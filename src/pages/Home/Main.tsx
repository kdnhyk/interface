import styled from "styled-components";
import Poster from "../../components/Poster";

import Interface from "../../assets/IMG_3044.PNG";
import InterfaceArchive from "../../assets/IMG_3045.PNG";

const MainBlock = styled.div`
  height: 100%;
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function Main() {
  return <MainBlock></MainBlock>;
}
