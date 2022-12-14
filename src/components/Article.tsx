import styled from "styled-components";
import { IsArticle } from "../store/articles";
import Span from "./Span";

const ArticleBlock = styled.div`
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
  height: fit-content;
  margin-right: 20px;
`;

const TitleBlock = styled.div`
  margin-right: 10px;
`;

const CommentBlock = styled.div``;

const UserNameBlock = styled.div``;

export default function Article({
  sort,
  title,
  comment,
  date,
  userName,
}: IsArticle) {
  return (
    <ArticleBlock>
      <SortBlock>
        <Span
          color={sort === "공지" ? "red" : "#808080"}
          fontSize={12}
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
      <UserNameBlock>{userName}</UserNameBlock>
    </ArticleBlock>
  );
}
