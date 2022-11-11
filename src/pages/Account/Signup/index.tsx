import styled from "styled-components";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Span from "../../../components/Span";
import { useState } from "react";
import { useSignup } from "../../../hooks/useSignup";

const SignupBlock = styled.div``;

const SignupForm = styled.form``;

export default function Signup() {
  const [newUserInfo, setNewUserInfo] = useState({
    DISPLAY_NAME: "",
    EMAIL: "",
    PASSWORD1: "",
    PASSWORD2: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUserInfo({ ...newUserInfo, [name]: value });
  };

  const { error, isPending, signup } = useSignup();
  const handleSubmit = () => {
    signup({
      email: newUserInfo.EMAIL,
      password: newUserInfo.PASSWORD1,
      displayName: newUserInfo.DISPLAY_NAME,
    });
  };

  return (
    <SignupBlock>
      {/* <SignupForm> */}
      <Input
        name="DISPLAY_NAME"
        placeholder="별명"
        value={newUserInfo.DISPLAY_NAME}
        onChange={(e) => handleInput(e)}
        required
      ></Input>
      <Input
        type="email"
        name="EMAIL"
        placeholder="이메일"
        value={newUserInfo.EMAIL}
        onChange={(e) => handleInput(e)}
        required
      ></Input>
      <Input
        name="PASSWORD1"
        placeholder="비밀번호"
        value={newUserInfo.PASSWORD1}
        onChange={(e) => handleInput(e)}
        required
      ></Input>
      <Input
        name="PASSWORD2"
        placeholder="비밀번호 확인"
        value={newUserInfo.PASSWORD2}
        onChange={(e) => handleInput(e)}
        required
      ></Input>
      <Button onClick={handleSubmit}>회원가입</Button>
      {/* </SignupForm> */}
    </SignupBlock>
  );
}
