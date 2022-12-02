import styled from "styled-components";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import { useSignout } from "../../hooks/useSignout";
import { useEffect } from "react";
import { authSelector } from "../../store/Auth";
import { useRecoilState } from "recoil";

const MainBlock = styled.div`
  padding: 10px;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 32px;
`;

export default function Main() {
  const { signout } = useSignout();
  const nav = useNavigate();
  const [auth, setAuth] = useRecoilState(authSelector);

  useEffect(() => {
    if (!auth.user) {
      nav("/account/login");
    }
  }, [auth.user, nav]);

  const onLogout = () => {
    signout();
    nav("/");
  };
  return (
    <MainBlock>
      <ButtonWrapper>
        <Button onClick={onLogout}>logout</Button>
      </ButtonWrapper>
    </MainBlock>
  );
}
