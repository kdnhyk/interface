import styled from "styled-components";
import { IsArticle } from "../store/articles";
import Span from "./Span";
import Poster from "./Poster";

const ArticleWithImgBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 10px;
  box-sizing: border-box;
`;

const ImgWrapper = styled.div``;

const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const SubBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
`;

export default function ArticleWithImg({ title, comment }: IsArticle) {
  return (
    <ArticleWithImgBlock>
      <Poster alt={"alt"} src={"/"}></Poster>
      <TitleBlock>
        <Span color="black" fontSize={14}>
          {title}
        </Span>
        <Span color="#B92EDC" fontSize={12}>
          {comment.length.toString()}
        </Span>
      </TitleBlock>
      <SubBlock>
        <Span color="#808080" fontSize={12}>
          {"dev"}
        </Span>
        <Span color="#808080" fontSize={12}>
          {"date"}
        </Span>
      </SubBlock>
    </ArticleWithImgBlock>
  );
}
