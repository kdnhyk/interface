import styled from "styled-components";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Span from "../../../components/Span";
import { useEffect, useState } from "react";
import { useSignup } from "../../../hooks/useSignup";
import { useNavigate } from "react-router";

const SignupBlock = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 760px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const TopArea = styled.div`
  margin: 40px 0px 30px 0px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-bottom: 15px;
`;

const ButtonWrapper = styled.div`
  height: 40px;
`;

export default function Signup() {
  const [newUserInfo, setNewUserInfo] = useState({
    DISPLAY_NAME: "",
    EMAIL: "",
    PASSWORD1: "",
    PASSWORD2: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUserInfo(() => {
      return { ...newUserInfo, [name]: value };
    });
    handlePasswordDifferent();
    console.log(isPasswordDifferent);
  };

  const [isPasswordDifferent, setIsPasswordDifferent] = useState(false);
  const handlePasswordDifferent = () => {
    if (
      newUserInfo.PASSWORD2 &&
      newUserInfo.PASSWORD1 !== newUserInfo.PASSWORD2
    ) {
      setIsPasswordDifferent(() => true);
    } else {
      setIsPasswordDifferent(() => false);
    }
  };

  const navigate = useNavigate();

  const { error, isPending, signup } = useSignup();

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  const handleSubmit = async () => {
    if (
      (!isPasswordDifferent &&
        newUserInfo.PASSWORD2 !== "" &&
        newUserInfo.PASSWORD2.length > 5 &&
        newUserInfo.DISPLAY_NAME !== "" &&
        newUserInfo.EMAIL !== "",
      regex.test(newUserInfo.EMAIL))
    ) {
      await signup({
        email: newUserInfo.EMAIL,
        password: newUserInfo.PASSWORD2,
        displayName: newUserInfo.DISPLAY_NAME,
      });
      navigate("/account");
    } else {
      alert("error");
    }
  };

  return (
    <SignupBlock>
      <TopArea>
        <Span fontSize={16} fontWeight="bold">
          회원가입
        </Span>
      </TopArea>
      <InputArea>
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
          // type="password"
          name="PASSWORD1"
          placeholder="비밀번호"
          value={newUserInfo.PASSWORD1}
          onChange={handleInput}
          required
        ></Input>
        <Input
          // type="password"
          name="PASSWORD2"
          placeholder="비밀번호 확인"
          value={newUserInfo.PASSWORD2}
          onChange={handleInput}
          isRed={isPasswordDifferent}
          required
        ></Input>
      </InputArea>
      <ButtonWrapper>
        <Button onClick={handleSubmit}>회원가입</Button>
      </ButtonWrapper>
    </SignupBlock>
  );
}
