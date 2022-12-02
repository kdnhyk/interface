import styled from "styled-components";
import SortButton from "../../components/SortButton";
import Article from "../../components/Article";

const MainBlock = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SortButtonWrapper = styled.div`
  width: 100%;
  max-width: 1000px;

  padding: 0px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #d9d9d9;
`;

const ArticleWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
`;

export default function Main() {
  return (
    <MainBlock>
      <SortButtonWrapper>
        <SortButton>전체글</SortButton>
      </SortButtonWrapper>
      <ArticleWrapper>
        <Article
          date={"0101"}
          sort={"공지"}
          title={"22/12/01 Update Log"}
          content={"내용"}
          comment={[""]}
        />
        <Article
          date={"0101"}
          sort={"의류"}
          title={"Article"}
          content={"내용"}
          comment={[]}
        />
      </ArticleWrapper>
    </MainBlock>
  );
}
