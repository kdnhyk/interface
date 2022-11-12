import styled from "styled-components";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useLogin } from "../../../hooks/useLogin";
import { useState } from "react";
import { useNavigate } from "react-router";

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
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };
  const { login } = useLogin();

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login({ email: loginInput.email, password: loginInput.password });
    navigate(-1);
  };

  return (
    <LoginFormBlock onSubmit={handleSubmit}>
      <h5>login</h5>
      <InputWrapper>
        <Input
          type="email"
          name="email"
          placeholder="이메일"
          value={loginInput.email}
          onChange={handleInput}
        ></Input>
      </InputWrapper>
      <InputWrapper>
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={loginInput.password}
          onChange={handleInput}
        ></Input>
      </InputWrapper>

      <EnterButton>
        <Button>로그인</Button>
      </EnterButton>
    </LoginFormBlock>
  );
}
