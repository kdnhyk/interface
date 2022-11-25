import styled from "styled-components";
import Span from "../../components/Span";
import SkateBoard from "../../assets/SkateBoard.png";
import Image from "../../components/Image";
import Index from "../../components/Index";

const StarterBlock = styled.div`
  padding: 30px;
  box-sizing: border-box;
`;

const ImageWrapper = styled.div`
  width: 410px;
  height: 200px;
`;

const IndexWrapper = styled.div`
  padding: 10px;
  margin-top: 20px;
  ol {
    li {
      font-size: 12px;
      margin-bottom: 4px;
    }
    span {
      margin-bottom: 10px;
    }
  }
`;

export default function Starter() {
  return (
    <StarterBlock>
      <ImageWrapper>
        <Image alt={"SkateBoard"} src={SkateBoard}></Image>
      </ImageWrapper>
      <Span color="#808080">_SKATEBOARD</Span>
      <Index />
    </StarterBlock>
  );
}
