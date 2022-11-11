import styled from "styled-components";
import Span from "./Span";
import Button from "./Button";
import { useFirestore } from "../hooks/useFirestore";

const GuestBookListBlock = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const UnitBlock = styled.li`
  width: 100%;
  height: 50px;
  padding: 20px;
  box-sizing: border-box;

  border-bottom: 1px solid #d9d9d9;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  Button {
    display: none;
  }
  &:hover {
    Button {
      display: block;
    }
  }
`;

const ButtonWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

export default function GuestBookList({ documents }: any) {
  const { deleteDocument } = useFirestore("GuestBook");
  const handleButton = (e: any) => {
    deleteDocument(e.target.id);
  };

  return (
    <GuestBookListBlock>
      {documents.map((doc: any) => (
        <UnitBlock>
          <Span>{doc.content}</Span>
          <ButtonWrapper>
            <Button id={doc.id} onClick={handleButton}>
              x
            </Button>
          </ButtonWrapper>
        </UnitBlock>
      ))}
    </GuestBookListBlock>
  );
}
