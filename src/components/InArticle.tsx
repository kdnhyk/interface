import { useState } from "react";
import styled from "styled-components";
import { useFirestore } from "../hooks/useFirestore";
import { useStorage } from "../hooks/useStorage";
import { IsArticle } from "../store/articles";

const InArticleBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  z-index: 1;
`;

const InArticleWrapperBlock = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: white;
  top: 46px;
  left: 0;
  z-index: 0;
`;

const MenuBlock = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 26px;
  right: 0px;
  background-color: #bfbfbf;
  color: black;

  hr {
    width: 42px;
    margin: 0;
  }
  p {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin: 0;
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  width: 200px;
  position: absolute;
  bottom: 0px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextArea = styled.div`
  padding-left: 10px;
  box-sizing: border-box;
`;

const TitleWrapper = styled.p`
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 40px;
`;

const ContentWrapper = styled.div`
  height: 100%;
  font-size: 12px;
  color: #bfbfbf;

  p {
    a {
      text-decoration: none;
      color: #bfbfbf;
      cursor: pointer;
    }
  }

  margin-bottom: 100px;
`;

const MenuButtonWrapper = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;

  cursor: pointer;
`;

export default function InArticle({
  id,
  userName,
  date,
  title,
  content,
  url,
  comment,
}: IsArticle) {
  const [isMenu, setIsMenu] = useState(false);

  const onClickMenu = () => {
    setIsMenu((prev) => !prev);
  };

  const { deleteDocument } = useFirestore("Board");
  const { deleteImage } = useStorage();
  const deleteUnit = () => {
    deleteDocument(id);
    deleteImage(url);
  };

  return (
    <InArticleWrapperBlock>
      <InArticleBlock>
        <MenuButtonWrapper onClick={onClickMenu}>
          <svg
            width="10"
            height="2"
            viewBox="0 0 10 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="2" height="2" fill="#BFBFBF" />
            <rect x="4" width="2" height="2" fill="#BFBFBF" />
            <rect x="8" width="2" height="2" fill="#BFBFBF" />
          </svg>
        </MenuButtonWrapper>
        {isMenu && (
          <MenuBlock>
            <p>Edit</p>
            <hr />
            <p onClick={deleteUnit}>Del</p>
          </MenuBlock>
        )}
        <TextArea>
          <TitleWrapper>{title}</TitleWrapper>
          <ContentWrapper>
            <p>{content}</p>
          </ContentWrapper>
        </TextArea>

        <ImageWrapper>
          <img alt="IMG" src={url}></img>
        </ImageWrapper>
      </InArticleBlock>
    </InArticleWrapperBlock>
  );
}
