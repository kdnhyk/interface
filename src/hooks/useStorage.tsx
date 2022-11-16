import { useState } from "react";
import { appStorage, tiemstamp } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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

interface IsFile {
  name: string;
  src: string;
}

export const useStorage = (file: IsFile) => {
  // const [response, setResponse] = useState(initState);
  // const [imageList, setImageList] = useState([]);
  // const storageRef = ref(appStorage, "images/" + file.name);
  // const upload = async (doc: any) => {
  //   setResponse({
  //     document: null,
  //     isPending: true,
  //     error: null,
  //     success: false,
  //   });
  //   try {
  //     if (file === null) return;
  //     const createdTime = tiemstamp.fromDate(new Date());
  //     uploadBytes(storageRef, file).then((snapshot) => {
  //       console.log("Uploaded a blob or file!");
  //       getDownloadURL(snapshot.ref).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  //     setResponse({
  //       document: docRef,
  //       isPending: false,
  //       error: null,
  //       success: true,
  //     });
  //   } catch (error: any) {
  //     setResponse({
  //       document: null,
  //       isPending: false,
  //       error: error.message,
  //       success: false,
  //     });
  //   }
  // };
  // const deleteDocument = async (id: string) => {
  //   try {
  //     await deleteDoc(doc(collectionRef, id));
  //     console.log(doc(appFireStore, file, id));
  //   } catch (error: any) {
  //     setResponse({
  //       document: null,
  //       isPending: false,
  //       error: error.message,
  //       success: false,
  //     });
  //   }
  // };
  // return { upload, deleteDocument, response };
};
