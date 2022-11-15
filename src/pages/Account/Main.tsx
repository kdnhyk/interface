import styled from "styled-components";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import { useSignout } from "../../hooks/useSignout";
import { useEffect } from "react";
import { authSelector } from "../../store/Auth";
import { useRecoilState } from "recoil";

const MainBlock = styled.div``;

export default function Main() {
  const { signout } = useSignout();
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authSelector);
  useEffect(() => {
    if (!auth.user) {
      navigate("/account/login");
    }
  }, [auth.user]);

  const onLogout = () => {
    signout();
    navigate("/");
  };
  return (
    <MainBlock>
      <Button onClick={onLogout}>logout</Button>
    </MainBlock>
  );
}
