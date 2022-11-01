import styled from "styled-components";
import Span from "./Span";

const SortButtonBlock = styled.div`
  width: 80px;
  height: 36px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 10px;
`;

export default function SortButton() {
  return (
    <SortButtonBlock>
      <Span color="white" size={15} isBold={true}>
        입문
      </Span>
    </SortButtonBlock>
  );
}
