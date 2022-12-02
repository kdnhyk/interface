import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { authSelector } from "../../store/Auth";
import { useRecoilState } from "recoil";

const WriteFormBlock = styled.form`
  width: 100%;
  height: fit-content;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;

  display: flex;
  flex-direction: column;
`;

const ContentBlock = styled.div`
  margin-bottom: 10px;
`;

const ButtonWrapperBlock = styled.div`
  height: 36px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export default function WriteForm() {
  const [content, setContent] = useState("");
  const [currentUser] = useRecoilState(authSelector);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContent(() => value);
  };

  const { addDocument } = useFirestore("GuestBook");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addDocument({
      content: content,
      userName: currentUser.displayName,
      userId: currentUser.user.uid,
    });
    setContent(() => "");
  };

  return (
    <>
      {currentUser.user && (
        <WriteFormBlock onSubmit={handleSubmit}>
          <ContentBlock>
            <Input
              placeholder="내용"
              name="content"
              value={content}
              onChange={handleInput}
            />
          </ContentBlock>
          <ButtonWrapperBlock>
            <Button fontSize="12" fontWeight="bold">
              작성완료
            </Button>
          </ButtonWrapperBlock>
        </WriteFormBlock>
      )}
    </>
  );
}
