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
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const TitleBlock = styled.div`
  display: flex;
  gap: 10px;
  Span {
    cursor: pointer;
  }
`;

const SubBlock = styled.div`
  display: flex;
  gap: 15px;
  Span {
    cursor: pointer;
  }
`;

export default function ArticleWithImg({ title, comment }: IsArticle) {
  return (
    <ArticleWithImgBlock>
      <ImgWrapper>
        <Poster alt={"alt"} src={"/"}></Poster>
      </ImgWrapper>

      <TitleBlock>
        <Span color="black" fontSize={13}>
          {title}
        </Span>
        <Span color="#B92EDC" fontSize={11}>
          {comment.length.toString()}
        </Span>
      </TitleBlock>
      <SubBlock>
        <Span color="#808080" fontSize={11}>
          {"dev"}
        </Span>
        <Span color="#808080" fontSize={11}>
          {"date"}
        </Span>
      </SubBlock>
    </ArticleWithImgBlock>
  );
}
