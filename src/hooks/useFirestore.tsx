import { useState } from "react";
import { appFireStore, tiemstamp } from "../firebase";
import { useRecoilState } from "recoil";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { firestoreState } from "../store/firestore";

interface IsInitState {
  document: any;
  isPending: boolean;
  error: any;
  success: boolean;
}

const initState: IsInitState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

export const useFirestore = (transaction: string) => {
  const [response, setResponse] = useState(initState);
  const collectionRef = collection(appFireStore, transaction);

  const addDocument = async (doc: any) => {
    setResponse({
      document: null,
      isPending: true,
      error: null,
      success: false,
    });
    try {
      const createdTime = tiemstamp.fromDate(new Date());
      const docRef = await addDoc(collectionRef, { ...doc, createdTime });
      console.log(docRef);
      setResponse({
        document: docRef,
        isPending: false,
        error: null,
        success: true,
      });
    } catch (error: any) {
      setResponse({
        document: null,
        isPending: false,
        error: error.message,
        success: false,
      });
    }
  };

  const deleteDocument = async (id: string) => {
    try {
      await deleteDoc(doc(collectionRef, id));
      console.log(doc(appFireStore, transaction, id));
    } catch (error: any) {
      setResponse({
        document: null,
        isPending: false,
        error: error.message,
        success: false,
      });
    }
  };

  return { addDocument, deleteDocument, response };
};
