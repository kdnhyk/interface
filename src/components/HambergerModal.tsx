import styled from "styled-components";
import Span from "./Span";

const HambergerModalBlock = styled.div``;

const ModalBlock = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  width: 100vw;
  height: 100%;
  color: black;
  background: white;
  @keyframes modalSlide {
    from {
      left: 100%;
    }
    to {
      left: 0;
    }
  }
  transform: modalSlide;
  animation: modalSlide 0.2s ease-in forwards;
`;

const ModalHeaderBlock = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 10px;
  box-sizing: border-box;
`;

const ModalMenuBlock = styled.div`
  width: 100%;
  height: 100px;
  padding-left: 15px;
  padding-right: 45px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
`;

const ModalLoginBlock = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid black;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: right;
  align-items: center;
`;

interface HambergerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HambergerModal({
  isOpen,
  onClose,
}: HambergerModalProps) {
  return (
    <HambergerModalBlock>
      {isOpen && (
        <ModalBlock>
          <ModalHeaderBlock onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L12 12L22 22M2 22L22 2"
                stroke="black"
                stroke-width="3"
              />
            </svg>
          </ModalHeaderBlock>
          <ModalMenuBlock>
            <Span>입문</Span>
            <Span>홍보</Span>
            <Span>의류</Span>
            <Span>익명</Span>
            <Span>?</Span>
          </ModalMenuBlock>
          <ModalLoginBlock>
            <Span>login</Span>
          </ModalLoginBlock>
        </ModalBlock>
      )}
    </HambergerModalBlock>
  );
}
