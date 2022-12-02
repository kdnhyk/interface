import Header from "../../components/Header";
import Write from "./Write";
import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import ArticleWithImg from "../../components/ArticleWithImg";
import styled from "styled-components";
import Span from "../../components/Span";
import { authSelector } from "../../store/Auth";
import { useRecoilState } from "recoil";

const BoardBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainBlock = styled.div`
  width: 100%;
  max-width: 1000px;

  padding: 30px 20px;
  box-sizing: border-box;
`;

const SortArea = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 10px;
`;

const WriteWrapper = styled.div`
  cursor: pointer;
`;

const ArticlesWrapper = styled.div`
  width: 100%;
  display: grid;
  @media (max-width: 200px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  gap: 10px;
`;

export default function Board() {
  const [currentUser] = useRecoilState(authSelector);
  const [isWrite, setIsWrite] = useState(false);
  const openWrite = () => {
    setIsWrite(true);
  };
  const closeWrite = () => {
    setIsWrite(false);
  };

  const { documents } = useCollection("Board", []);

  return (
    <BoardBlock>
      <Header />
      {isWrite ? (
        <Write closeWrite={closeWrite} />
      ) : (
        <MainBlock>
          <SortArea>
            <Span fontWeight="bold" fontSize={16}>
              의류
            </Span>
            {currentUser.user && (
              <WriteWrapper onClick={openWrite}>
                <Span fontSize={12}>글 작성</Span>
              </WriteWrapper>
            )}
          </SortArea>
          <ArticlesWrapper>
            {documents &&
              documents.map((doc) => {
                return (
                  <ArticleWithImg
                    date={doc.createdTime.toDate().toDateString()}
                    sort={"공지"}
                    url={doc.url}
                    userName={doc.userName}
                    title={doc.title}
                    content={doc.content}
                    comment={[]}
                  />
                );
              })}
          </ArticlesWrapper>
        </MainBlock>
      )}
    </BoardBlock>
  );
}
