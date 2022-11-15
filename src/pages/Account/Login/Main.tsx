import styled from "styled-components";
import LoginForm from "./LoginForm";
import Span from "../../../components/Span";
import { Link } from "react-router-dom";

const MainBlock = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainSizeWrapper = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 760px;
`;

const LoginMenuBlock = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  gap: 20px;
  justify-content: right;
`;

const SNSLoginBlcok = styled.div``;

export default function Main() {
  return (
    <MainBlock>
      <MainSizeWrapper>
        <LoginForm />
        <LoginMenuBlock>
          <Link to={"/"}>
            <Span fontSize={12}>아이디/비밀번호 찾기</Span>
          </Link>

          <Link to={"/account/signup"}>
            <Span fontSize={12}>회원가입</Span>
          </Link>
        </LoginMenuBlock>
      </MainSizeWrapper>
    </MainBlock>
  );
}
