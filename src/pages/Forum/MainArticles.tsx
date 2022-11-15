import styled from "styled-components";
import SortButton from "../../components/SortButton";
import Article from "../../components/Article";
import { useArticles } from "../../firebase";
import { useCallback, useEffect, useState } from "react";
import { IsArticle } from "../../store/articles";
import { useRecoilState, useRecoilValue } from "recoil";
import { articlesSelector } from "../../store/articles";

const MainArticlesBlock = styled.div`
  height: 375px;
`;

const ArticleListBlock = styled.div`
  height: 100%;
  background: #d9d9d9;
`;

export default function MainArticles() {
  const [articles, setArticles] = useRecoilState(articlesSelector);

  return (
    <MainArticlesBlock>
      <SortButton>입문</SortButton>
      <ArticleListBlock>
        {articles.map((article) => (
          <Article
            sort={article.sort}
            date={article.date}
            title={article.title}
            content={article.content}
            comment={article.comment}
          ></Article>
        ))}
      </ArticleListBlock>
    </MainArticlesBlock>
  );
}
