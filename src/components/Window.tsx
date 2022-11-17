import styled from "styled-components";
import Span from "./Span";
import Draggable from "react-draggable";
import Poster from "./Poster";
import { useState } from "react";

interface IsWindowStyle {
  isFocus?: number;
}

const WindowBlock = styled.div<IsWindowStyle>`
  width: 200px;
  height: 180px;

  cursor: pointer;

  z-index: ${({ isFocus }) => (isFocus ? "1" : "0")};
`;

const WindowHeader = styled.div`
  width: 100%;
  height: 30px;
  background-color: black;
  color: white;
  padding: 5px;
  border-bottom: 1px solid white;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  width: 20px;
  height: 20px;

  border: 1px solid black;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
`;

interface IsWindow extends IsWindowStyle {
  title: string;
  src: string;
}

export default function Window({ title, src, isFocus }: IsWindow) {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Draggable>
      <WindowBlock isFocus={isFocus}>
        {isOpen && (
          <>
            <WindowHeader>
              <Span fontSize={15} fontWeight="bold">
                {title}
              </Span>
              <ButtonWrapper onClick={onClose}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 11M1 11L11 1"
                    stroke="black"
                    stroke-width="1.5"
                  />
                </svg>
              </ButtonWrapper>
            </WindowHeader>
            <Poster width={200} height={150} alt={"pic"} src={src}></Poster>
          </>
        )}
      </WindowBlock>
    </Draggable>
  );
}
