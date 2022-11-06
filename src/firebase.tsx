import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getDoc,
  getDocs,
  setDoc,
  doc,
  query,
  collection,
  where,
} from "firebase/firestore";
import { articlesState } from "./store/articles";
import { useRecoilState } from "recoil";

const firebaseConfig = {
  apiKey: "AIzaSyC2h5Vmws16s3aaRwRt1WydSOaB46W2A3U",
  authDomain: "interface-archive.firebaseapp.com",
  projectId: "interface-archive",
  storageBucket: "interface-archive.appspot.com",
  messagingSenderId: "478009461402",
  appId: "1:478009461402:web:965cef5d0cd0a524ab6d23",
  measurementId: "G-S3E42XZ63D",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function useArticles(sort: string) {
  const [articles, setArticles] = useRecoilState(articlesState);
  // const articles = doc(db, "articles", sort);
  // const articlesSnapshot = await getDoc(articles);
  const docRef = query(collection(db, "articles"), where("sort", "==", "공지"));
  const allArticles = await getDocs(docRef);
  allArticles.forEach((doc: any) => {
    console.log("get articles");
    setArticles(doc.data());
  });

  // if (!articlesSnapshot.exists()) {
  //   console.log("fail");
  //   return null;
  // }

  // return articlesSnapshot.data();
}

interface IsAddArticle {
  id: string;
  sort: "공지" | "입문" | "익명";
  date: string;
  title: string;
  content: string;
  comment: string[];
}

export async function addArticle({
  id,
  sort,
  date,
  title,
  content,
  comment,
}: IsAddArticle) {
  const articleRef = doc(db, "articles", id);
  setDoc(
    articleRef,
    {
      sort: sort,
      date: date,
      title: title,
      content: content,
      comment: comment,
    },
    { merge: true }
  );
}
