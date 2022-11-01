import styled from "styled-components";
import SortButton from "../../components/SortButton";
import { StarterArticle } from "../../store/articles";
import Article from "../../components/Article";

const MainArticlesBlock = styled.div`
  height: 375px;
`;

const ArticleListBlock = styled.div`
  height: 100%;
  background: #d9d9d9;
`;

export default function MainArticles() {
  return (
    <MainArticlesBlock>
      <SortButton></SortButton>

      <ArticleListBlock>
        {StarterArticle.list.map((article) => (
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
