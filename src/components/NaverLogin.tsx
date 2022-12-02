import { useEffect } from "react";
import { useLocation } from "react-router";
import { authSelector } from "../store/Auth";
import { useRecoilState } from "recoil";
import { useSignup } from "../hooks/useSignup";

export const naverLogout = () => {
  localStorage.removeItem("com.naver.nid.access_token");
  window.location.reload();
};

interface IsNaverLogin {
  setGetToken: any;
}

export default function NaverLogin({ setGetToken }: IsNaverLogin) {
  const { naver } = window;
  const [, setUserInfo] = useRecoilState(authSelector);

  const naverLogin = new naver.LoginWithNaverId({
    clientId: process.env.REACT_APP_NAVER_LOGIN_CLIENT_ID,
    callbackUrl: "https://interface-archive.web.app/account/login",

    isPopup: false,
    loginButton: { color: "green", type: 1, height: 40 },
  });

  const { signupWithNaver } = useSignup();
  const getUserInfo = async () => {
    await naverLogin.getLoginStatus((status: any) => {
      console.log(`login: ${status}`);
      if (status) {
        setUserInfo({
          user: naverLogin.user,
          displayName: naverLogin.user.getName(),
        });
      }
    });
    // signupWithNaver({naverLogin.user, ""});
  };

  const location = useLocation();
  const getToken = () => {
    if (!location.hash) return;
    const token = location.hash.split("=")[1].split("&")[0];
    console.log(token);

    localStorage.setItem("access_token", token);
    return token;
  };

  useEffect(() => {
    naverLogin.init();
    getUserInfo();
    getToken();
  }, []);

  return <div id="naverIdLogin"></div>;
}
