import styled from "styled-components";
import Span from "./Span";
import Poster from "./Poster";

const MediaBoxBlock = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const BoxWrapperBlock = styled.div`
  display: flex;
  gap: 1px;
  flex-flow: wrap;
`;

const BoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
`;

export default function MediaBox() {
  return (
    <MediaBoxBlock>
      <Span size={16}>Mixtape</Span>
      <BoxWrapperBlock>
        <BoxBlock>
          <Poster width={120} height={120} alt="" src=""></Poster>
          <Span size={12}>[#1]</Span>
        </BoxBlock>
        <BoxBlock>
          <Poster width={120} height={120} alt="" src=""></Poster>
          <Span size={12}>[#2]</Span>
        </BoxBlock>
        <BoxBlock>
          <Poster width={120} height={120} alt="" src=""></Poster>
          <Span size={12}>[#3]</Span>
        </BoxBlock>
        <BoxBlock>
          <Poster width={120} height={120} alt="" src=""></Poster>
          <Span size={12}>[#4]</Span>
        </BoxBlock>
        <BoxBlock>
          <Poster width={120} height={120} alt="" src=""></Poster>
          <Span size={12}>[#5]</Span>
        </BoxBlock>
      </BoxWrapperBlock>
    </MediaBoxBlock>
  );
}
