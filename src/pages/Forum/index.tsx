import Header from "../../components/Header";
import Banner from "./Banner";
import MainArticles from "./MainArticles";
import { addArticle } from "../../firebase";
import Write from "./Write";
import { useEffect, useState } from "react";
import { useArticles } from "../../firebase";

export default function Forum() {
  const [isWrite, setIsWrite] = useState(false);

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
              addArticle({
                id: "a",
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
