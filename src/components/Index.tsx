import styled from "styled-components";
import P from "./P";

interface IsIndexStyle {}

const IndexBlock = styled.div``;

const OrderListWrapper = styled.div``;

interface IsIndex extends IsIndexStyle {}

export default function Index() {
  return (
    <IndexBlock>
      <P>목차</P>
      <OrderListWrapper>
        <P>1. 스케이트보드 구입</P>
        <P>2. 구성요소</P>
        <P>3. 트릭</P>
        <P>4. 기타</P>
      </OrderListWrapper>
    </IndexBlock>
  );
}
