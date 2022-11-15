import styled from "styled-components";
import Window from "../../components/Window";
import src from "../../assets/Logo.png";

const MainBlock = styled.div`
  height: 100%;

  padding: 25px;
  box-sizing: border-box;
`;

export default function Main() {
  return (
    <MainBlock>
      <Window title="SPOT" src={src} />
    </MainBlock>
  );
}
