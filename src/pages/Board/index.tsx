import Header from "../../components/Header";
import Write from "./Write";
import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import ArticleWithImg from "../../components/Article-img";
import styled from "styled-components";
import Span from "../../components/Span";

const BoardBlock = styled.div``;

const SortArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 10px 0px 20px;
  box-sizing: border-box;
`;

const WriteWrapper = styled.div`
  cursor: pointer;
`;

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default function Board() {
  const [isWrite, setIsWrite] = useState(false);
  const onWrite = () => {
    setIsWrite(true);
  };

  const { addDocument } = useFirestore("first");

  return (
    <>
      <Header />
      {isWrite ? (
        <Write />
      ) : (
        <BoardBlock>
          <SortArea>
            <Span fontWeight="bold" fontSize={16}>
              의류
            </Span>
            <WriteWrapper onClick={onWrite}>
              <Span fontSize={12}>글 작성</Span>
            </WriteWrapper>
          </SortArea>
          <ArticlesWrapper>
            <ArticleWithImg
              date={"date"}
              sort={"공지"}
              title={"스케이트보드 입문"}
              content={"???"}
              comment={[]}
            />
            <ArticleWithImg
              date={"date"}
              sort={"공지"}
              title={"스케이트보드 입문"}
              content={"???"}
              comment={[]}
            />
            <ArticleWithImg
              date={"date"}
              sort={"공지"}
              title={"스케이트보드 입문"}
              content={"???"}
              comment={[]}
            />
            <ArticleWithImg
              date={"date"}
              sort={"공지"}
              title={"스케이트보드 입문"}
              content={"???"}
              comment={[]}
            />
          </ArticlesWrapper>
        </BoardBlock>
      )}
    </>
  );
}
