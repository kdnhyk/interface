import styled from "styled-components";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Span from "../../components/Span";
import Button from "../../components/Button";
import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router";

const WriteBlock = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  padding: 20px 30px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SortArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 10px 0px 20px;
  box-sizing: border-box;
`;

export default function Write() {
  const [input, setInput] = useState({
    uid: "",
    userName: "",
    title: "",
    img: "",
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

  const { addDocument, response } = useFirestore("Board");

  const nav = useNavigate();

  const onSubmit = () => {
    addDocument(input);
    nav("/board/fasion");
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
        <Textarea
          name="content"
          placeholder="내용"
          value={input.content}
          onChange={onChangeInput}
        />
        <Button onClick={onSubmit}>add</Button>
      </WriteBlock>
    </>
  );
}
