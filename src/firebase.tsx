import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, Timestamp } from "firebase/firestore";
import {
  getDoc,
  getDocs,
  setDoc,
  doc,
  query,
  collection,
  where,
} from "firebase/firestore";
import { articlesSelector } from "./store/articles";
import { useRecoilState } from "recoil";

const firebaseConfig = {
  apiKey: "AIzaSyC2h5Vmws16s3aaRwRt1WydSOaB46W2A3U",
  authDomain: "interface-archive.firebaseapp.com",
  projectId: "interface-archive",
  storageBucket: "interface-archive.appspot.com",
  messagingSenderId: "478009461402",
  appId: "1:478009461402:web:965cef5d0cd0a524ab6d23",
  measurementId: "G-S3E42XZ63D",
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SEMDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const appAuth = getAuth();
const appFireStore = getFirestore(app);
const tiemstamp = Timestamp;

export { appAuth, appFireStore, tiemstamp };

///////////////////////////////////////////////

export async function useArticles(sort: string) {
  const [articles, setArticles] = useRecoilState(articlesSelector);
  // const articles = doc(db, "articles", sort);
  // const articlesSnapshot = await getDoc(articles);
  const docRef = query(
    collection(appFireStore, "articles"),
    where("sort", "==", "공지")
  );
  const allArticles = await getDocs(docRef);
  allArticles.forEach((doc: any) => {
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
  const articleRef = doc(appFireStore, "articles", id);
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
