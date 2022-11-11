import { atom } from "recoil";

const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

export const firestoreState = atom({
  key: "firestore",
  default: initState,
});
