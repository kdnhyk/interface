import { useState } from "react";
import { signOut } from "firebase/auth";
import { appAuth } from "../firebase";
import { authSelector } from "../store/Auth";
import { useRecoilState } from "recoil";

export const useSignout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [currentUser, setCurrentUser] = useRecoilState(authSelector);

  const signout = () => {
    setError(null);
    setIsPending(true);

    signOut(appAuth)
      .then(() => {
        setCurrentUser({ user: null, displayName: "" });
        console.log("logout");
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  };

  return { error, isPending, signout };
};
