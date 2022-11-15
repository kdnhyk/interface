import { atom, selector } from "recoil";

export type IsSort = "공지" | "입문" | "익명";

export interface IsArticle {
  id?: number;
  userId?: string;
  userName?: string;
  date: string;
  sort: IsSort;
  title: string;
  content: string;
  recommendation?: number;
  comment: string[];
}

export interface IsComment {
  content: string;
}
