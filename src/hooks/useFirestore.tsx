import { appFireStore, timestamp } from "../firebase";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";

export const useFirestore = (transaction: string) => {
  const collectionRef = collection(appFireStore, transaction);

  const addDocument = async (doc: any) => {
    try {
      const createdTime = timestamp.fromDate(new Date());
      const docRef = await addDoc(collectionRef, { ...doc, createdTime });
      console.log(docRef);
    } catch (error: any) {
      console.log(error.message);
      console.log(doc);
    }
  };

  const deleteDocument = async (id: string) => {
    try {
      await deleteDoc(doc(collectionRef, id));
      console.log(doc(appFireStore, transaction, id));
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return { addDocument, deleteDocument };
};
