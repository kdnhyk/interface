import styled from "styled-components";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Span from "../../../components/Span";
import { useState } from "react";
import { useSignup } from "../../../hooks/useSignup";
import { useNavigate } from "react-router";

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

  const navigate = useNavigate();

  const { error, isPending, signup } = useSignup();
  const handleSubmit = async () => {
    await signup({
      email: newUserInfo.EMAIL,
      password: newUserInfo.PASSWORD1,
      displayName: newUserInfo.DISPLAY_NAME,
    });
    navigate(-1);
  };

  return (
    <SignupBlock>
      {/* <SignupForm> */}
      <Input
        name="DISPLAY_NAME"
        placeholder="별명"
        value={newUserInfo.DISPLAY_NAME}
        onChange={handleInput}
        required
      ></Input>
      <Input
        type="email"
        name="EMAIL"
        placeholder="이메일"
        value={newUserInfo.EMAIL}
        onChange={handleInput}
        required
      ></Input>
      <Input
        name="PASSWORD1"
        placeholder="비밀번호"
        value={newUserInfo.PASSWORD1}
        onChange={handleInput}
        required
      ></Input>
      <Input
        name="PASSWORD2"
        placeholder="비밀번호 확인"
        value={newUserInfo.PASSWORD2}
        onChange={handleInput}
        required
      ></Input>
      <Button onClick={handleSubmit}>회원가입</Button>
      {/* </SignupForm> */}
    </SignupBlock>
  );
}
