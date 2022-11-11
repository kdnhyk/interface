import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { appAuth } from "../firebase";
import { authSelector } from "../store/Auth";
import { useRecoilState } from "recoil";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [currentUser, setCurrentUser] = useRecoilState(authSelector);

  interface IsSignup {
    email: string;
    password: string;
    displayName: string;
  }
  const signup = ({ email, password, displayName }: IsSignup) => {
    setError(null);
    setIsPending(true);
    console.log({ email, password, displayName });

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user: " + user);

        if (!user) {
          throw new Error("회원가입에 실패했습니다.");
        }

        updateProfile(appAuth.currentUser!, { displayName })
          .then(() => {
            setCurrentUser({ user: user, displayName: displayName });
            setError(null);
            setIsPending(false);
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  };

  return { error, isPending, signup };
};
