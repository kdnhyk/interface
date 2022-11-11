import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { appFireStore } from "../firebase";

export const useCollection = (transaction: string) => {
  const [documents, setDocuments] = useState<null | any[]>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(appFireStore, transaction),
      (snapshot) => {
        let result: any[] = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(() => result);
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
