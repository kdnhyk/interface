import Header from "../../components/Header";
import Banner from "./Banner";
import MainArticles from "./MainArticles";
import Write from "./Write";
import { useEffect, useState } from "react";
import { useArticles } from "../../firebase";
import { articlesSelector, IsArticle } from "../../store/articles";
import { useRecoilState } from "recoil";
import { useFirestore } from "../../hooks/useFirestore";

export default function Forum() {
  const [isWrite, setIsWrite] = useState(true);
  const [a, b] = useRecoilState(articlesSelector);
  const addArticle = (temp: IsArticle) => {
    b(a.concat(temp));
  };

  const { addDocument } = useFirestore("first");

  return (
    <>
      <Header />
      {isWrite ? (
        <Write />
      ) : (
        <>
          <Banner />
          <MainArticles />
          <button
            onClick={() =>
              addDocument({
                id: 3,
                sort: "공지",
                date: "2022/11/01",
                title: "interface 가이드",
                content: "가이드 dd",
                comment: ["댓글1"],
              })
            }
          >
            refresh
          </button>
        </>
      )}
    </>
  );
}
