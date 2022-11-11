import { atom, selector } from "recoil";

export type IsSort = "공지" | "입문" | "익명";

export interface IsArticle {
  id?: number;
  userId?: string;
  sort: IsSort;
  date: string;
  title: string;
  content: string;
  recommendation?: number;
  comment: string[];
}

export interface IsComment {
  content: string;
}

export const articlesState = atom<IsArticle[]>({
  key: "articles",
  default: [
    {
      sort: "공지",
      date: "2022/11/01",
      title: "interface 가이드",
      content: "가이드 내용",
      comment: [],
    },
    {
      sort: "입문",
      date: "2022/11/01",
      title: "보드 매장 목록",
      content: "가이드 내용",
      comment: [],
    },
    {
      sort: "입문",
      date: "2022/11/01",
      title: "보드 브랜드 목록",
      content: "가이드 내용",
      comment: [],
    },
  ],
});

export const articlesSelector = selector<IsArticle[]>({
  key: "selectArticles",
  get: ({ get }) => {
    const originalState = get(articlesState);
    return originalState;
  },
  set: ({ set }, newValue) => {
    set(articlesState, newValue);
  },
});
