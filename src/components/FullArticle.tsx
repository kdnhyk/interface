import styled from "styled-components";
import { IsArticle } from "../store/articles";
import Span from "./Span";
// 미완
const FullArticleBlock = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
  box-sizing: border-box;
  background: white;

  border-bottom: 1px solid #d9d9d9;
`;

const SortBlock = styled.div`
  width: 32px;
  margin-right: 20px;
`;

const TitleBlock = styled.div`
  margin-right: 10px;
`;

const CommentBlock = styled.div``;

export default function FullArticle({ sort, title, comment }: IsArticle) {
  return (
    <FullArticleBlock>
      <SortBlock>
        <Span
          color={sort === "공지" ? "red" : "#808080"}
          fontSize={13}
          fontWeight="bold"
        >
          {sort}
        </Span>
      </SortBlock>
      <TitleBlock>
        <Span color="black" fontSize={13}>
          {title}
        </Span>
      </TitleBlock>
      <CommentBlock>
        <Span color="#B92EDC" fontSize={12}>
          {comment.length.toString()}
        </Span>
      </CommentBlock>
    </FullArticleBlock>
  );
}
