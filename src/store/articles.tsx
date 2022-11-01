export interface IsArticleList {
  name: string;
  list: IsArticle[];
}

export interface IsArticle {
  sort: "공지" | "입문" | "익명";
  date: string;
  title: string;
  content: string;
  comment: IsComment[];
}

export interface IsComment {
  content: string;
}

export const StarterArticle: IsArticleList = {
  name: "입문",
  list: [
    {
      sort: "공지",
      date: "2022/11/01",
      title: "interface 가이드",
      content: "가이드 내용",
      comment: [],
    },
  ],
};
