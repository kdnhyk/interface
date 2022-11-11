import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const LoginFormBlock = styled.form`
  width: 100%;
  height: 100%;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;

const EnterButton = styled.div`
  height: 40px;
`;

export default function LoginForm() {
  return (
    <LoginFormBlock>
      <h5>login</h5>
      <InputWrapper>
        <Input placeholder="아이디"></Input>
      </InputWrapper>
      <InputWrapper>
        <Input placeholder="비밀번호"></Input>
      </InputWrapper>

      <EnterButton>
        <Button>로그인</Button>
      </EnterButton>
    </LoginFormBlock>
  );
}
