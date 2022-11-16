import { appFireStore, tiemstamp } from "../firebase";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { useResponse } from "./useResponse";

export const useFirestore = (transaction: string) => {
  const collectionRef = collection(appFireStore, transaction);
  const { response, onStart, onSuccess, onError } = useResponse();

  const addDocument = async (doc: any) => {
    onStart();
    try {
      const createdTime = tiemstamp.fromDate(new Date());
      const docRef = await addDoc(collectionRef, { ...doc, createdTime });
      console.log(docRef);
      onSuccess(docRef);
    } catch (error: any) {
      onError(error);
    }
  };

  const deleteDocument = async (id: string) => {
    try {
      await deleteDoc(doc(collectionRef, id));
      console.log(doc(appFireStore, transaction, id));
    } catch (error: any) {
      onError(error);
    }
  };

  return { addDocument, deleteDocument, response };
};
