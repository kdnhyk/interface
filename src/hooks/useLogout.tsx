import { signOut } from "firebase/auth";
import { appAuth } from "../firebase";
import { authSelector } from "../store/Auth";
import { useRecoilState } from "recoil";

export const useLogout = () => {
  const [, setCurrentUser] = useRecoilState(authSelector);

  const logout = () => {
    signOut(appAuth)
      .then(() => {
        setCurrentUser({ user: null, displayName: "" });
        console.log("logout");
      })
      .catch((error) => {
        throw new error("로그아웃 오류");
      });
  };

  return { logout };
};
