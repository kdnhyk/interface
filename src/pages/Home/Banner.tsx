import styled from "styled-components";
import Window from "../../components/Window";
import src from "../../assets/Logo.png";

const BannerBlock = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 220px;

  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  //background-size: cover
`;

export default function Banner() {
  return (
    <BannerBlock>
      <Window title="SPOT" src={src} />
    </BannerBlock>
  );
}
