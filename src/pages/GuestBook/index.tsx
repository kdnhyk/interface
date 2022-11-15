import styled from "styled-components";
import Header from "../../components/Header";
import WriteForm from "./WriteForm";
import { useCollection } from "../../hooks/useCollection";
import GuestBookList from "./GuestBookList";

const GuestBookBlock = styled.div`
  background: white;
`;

const BookArrayBlock = styled.div``;

export default function GuestBook() {
  const { documents, error } = useCollection("GuestBook", []);

  return (
    <GuestBookBlock>
      <Header />
      <BookArrayBlock>
        {error && <h3>{error}</h3>}

        {documents && <GuestBookList documents={documents} />}
      </BookArrayBlock>
      <WriteForm />
    </GuestBookBlock>
  );
}
