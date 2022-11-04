import styled from "styled-components";

const BannerBlock = styled.div`
  height: 375px;
  background: #c0c0c0;
  // 격자 생성 (복붙한 코드)
  /* background-color: white;
  background-image: linear-gradient(black 1px, transparent 1px),
    linear-gradient(90deg, black 1px, transparent 1px),
    linear-gradient(black 1px, transparent 1px),
    linear-gradient(90deg, black 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -1px -1px, -1px -1px, -1px -1px, -1px -1px; */
`;

export default function Banner() {
  return <BannerBlock></BannerBlock>;
}
