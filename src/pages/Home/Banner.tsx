import styled from "styled-components";
import Window from "../../components/Window";
import src from "../../assets/Logo.png";

const BannerBlock = styled.div`
  width: 100%;
  height: 220px;

  padding: 20px 80px;
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
