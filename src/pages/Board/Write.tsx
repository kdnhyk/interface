import styled from "styled-components";
import Input from "../../components/Input";
import Span from "../../components/Span";
import Button from "../../components/Button";
import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router";
import ImgageUploader from "../../components/ImageUploader";
import Textarea from "../../components/Textarea";
import { authSelector } from "../../store/Auth";
import { useRecoilState } from "recoil";

const SortArea = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  padding: 30px 10px 0px 20px;
  box-sizing: border-box;
`;

const WriteBlock = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  background: white;
  padding: 20px 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContentWrapper = styled.div`
  height: 100%;
`;

const ButtonWrapper = styled.div`
  height: 40px;
`;

export default function Write() {
  const [currnetUser, setCurrentUser] = useRecoilState(authSelector);
  const [input, setInput] = useState({
    uid: "",
    userName: currnetUser.displayName,
    title: "",
    url: "",
    content: "",
  });

  const onChangeInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { addDocument } = useFirestore("Board");

  const nav = useNavigate();

  const onSubmit = () => {
    addDocument(input);
    nav("-1");
  };

  const setImageURL = (url: string) => {
    setInput((prev) => {
      return { ...prev, url: url };
    });
    console.log(input);
  };

  return (
    <>
      <SortArea>
        <Span fontWeight="bold" fontSize={16}>
          의류
        </Span>
      </SortArea>
      <WriteBlock>
        <Input
          name="title"
          placeholder="제목"
          value={input.title}
          onChange={onChangeInput}
        />
        <ImgageUploader setImageURL={setImageURL} />
        <ContentWrapper>
          <Textarea
            name="content"
            placeholder="내용"
            value={input.content}
            onChange={onChangeInput}
          />
        </ContentWrapper>
        <ButtonWrapper>
          <Button onClick={onSubmit}>작성완료</Button>
        </ButtonWrapper>
      </WriteBlock>
    </>
  );
}
