import styled from "styled-components";
import Header from "../../components/Header";
import WriteForm from "./WriteForm";
import { useCollection } from "../../hooks/useCollection";
import GuestBookList from "./GuestBookList";

const GuestBookBlock = styled.div`
  background: white;
`;

const BookArrayBlock = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 20px;
`;

export default function GuestBook() {
  const { documents, error } = useCollection("GuestBook", []);

  return (
    <GuestBookBlock>
      <Header />
      <BookArrayBlock>
        {error && <h3>{error}</h3>}
        {documents && <GuestBookList documents={documents} />}
        <WriteForm />
      </BookArrayBlock>
    </GuestBookBlock>
  );
}
