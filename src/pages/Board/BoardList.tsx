import styled from "styled-components";

const BoardListBlock = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  background: white;
  padding: 20px 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function BoardList() {
  return <BoardListBlock></BoardListBlock>;
}
