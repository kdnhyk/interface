import styled from "styled-components";
import Span from "../../components/Span";

const BoardBlock = styled.div`
  height: 100%;
  background: white;

  padding: 20px;
  box-sizing: border-box;
`;

interface IsBoard {
  order: number;
}

export default function Board({ order }: IsBoard) {
  return (
    <BoardBlock>
      <Span>1234</Span>
    </BoardBlock>
  );
}
