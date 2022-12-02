import { atom, selector } from "recoil";

export type IsSort = "공지" | "의류" | "질문" | "잡담";

export interface IsArticle {
  id: string;
  userId?: string;
  userName?: string;
  date: string;
  sort: IsSort;
  url: string;
  title: string;
  content: string;
  recommendation?: number;
  comment: string[];
  views?: number;
}

export interface IsComment {
  content: string;
}
