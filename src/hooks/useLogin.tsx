import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { appAuth } from "../firebase";
import { authSelector } from "../store/Auth";
import { useRecoilState } from "recoil";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [, setCurrentUser] = useRecoilState(authSelector);

  interface IsLogin {
    email: string;
    password: string;
  }
  const login = ({ email, password }: IsLogin) => {
    setError(null);
    setIsPending(true);
    console.log({ email, password });

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const displayName = getAuth().currentUser?.displayName;
        if (!user || !displayName) {
          throw new Error("로그인에 실패했습니다.");
        }
        setCurrentUser({ user: user, displayName: displayName });
        console.log("user: " + user);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  };

  return { error, isPending, login };
};
