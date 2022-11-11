import { useArticles } from "../firebase";

export default function useRefresh() {
  useArticles("sort");
}
