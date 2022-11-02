import styled from "styled-components";
import Span from "./Span";
import Image from "./Image";

const MediaBoxBlock = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const BoxWrapperBlock = styled.div`
  display: flex;
  gap: 1px;
`;

const BoxBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function MediaBox() {
  return (
    <MediaBoxBlock>
      <Span size={16}>Mixtape</Span>
      <BoxWrapperBlock>
        <BoxBlock>
          <Image alt="" src=""></Image>
          <Span>[First mixtape]</Span>
        </BoxBlock>
        <BoxBlock>
          <Image alt="" src=""></Image>
          <Span>[First mixtape]</Span>
        </BoxBlock>
      </BoxWrapperBlock>
    </MediaBoxBlock>
  );
}
