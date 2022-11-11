import styled from "styled-components";
import { IsArticle } from "../store/articles";
import Span from "./Span";

const ArticleBlock = styled.div`
  width: 100%;
  min-width: 375px;
  max-width: 970px;
  height: 32px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  background: white;

  border-top: 1px solid #d9d9d9;
`;

const SortBlock = styled.div`
  width: 32px;
`;

const TitleBlock = styled.div`
  margin-right: 10px;
`;

const CommentBlock = styled.div``;

export default function Article({ sort, title, comment }: IsArticle) {
  return (
    <ArticleBlock>
      <SortBlock>
        <Span
          color={sort === "공지" ? "red" : "grey"}
          size={12}
          fontWeight="bold"
        >
          {sort}
        </Span>
      </SortBlock>
      <TitleBlock>
        <Span color="black" size={12}>
          {title}
        </Span>
      </TitleBlock>
      <CommentBlock>
        <Span color="blue" size={9}>
          {comment.length.toString()}
        </Span>
      </CommentBlock>
    </ArticleBlock>
  );
}
