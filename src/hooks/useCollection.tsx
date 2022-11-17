import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { appFireStore } from "../firebase";

export const useCollection = (transaction: string, myQuery?: any[]) => {
  const [documents, setDocuments] = useState<null | DocumentData[]>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    let q;
    if (myQuery) {
      q = query(
        collection(appFireStore, transaction),
        // where(...myQuery),
        orderBy("createdTime")
      );
    }

    const unsubscribe = onSnapshot(
      query(collection(appFireStore, transaction), orderBy("createdTime")),
      (snapshot) => {
        let result: any[] = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(result);
        setError(null);
      },
      (error) => {
        setError(error.message);
      }
    );

    return unsubscribe;
  }, [collection]);

  return { documents, error };
};
