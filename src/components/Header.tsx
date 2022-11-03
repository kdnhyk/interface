import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HambergerModal from "./HambergerModal";

const HeaderBlock = styled.div`
  height: 40px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

const LogoBlock = styled.div`
  cursor: pointer;
`;

const HambergerBlock = styled.div`
  cursor: pointer;
`;

interface IsHeader {
  userName?: string;
  teamColor?: string;
  menu1Floor?: string[];
  menu2Floor?: string[];
}

export default function Header({
  userName,
  teamColor,
  menu1Floor,
  menu2Floor,
}: IsHeader) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onOpenModal = () => {
    setIsModalOpen(true);
  };
  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <HeaderBlock>
        <Link to="/">
          <LogoBlock>
            <svg
              width="21"
              height="17"
              viewBox="0 0 21 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.7027 2V16H6.48649H11.3514M2.7027 2L11.3514 3.75M2.7027 2H0M20 2L11.3514 3.75M20 2V3.91406M20 2V5.82812M11.3514 3.75V10.2031M11.3514 16H20V5.82812M11.3514 16V10.2031M20 5.82812V8.5625L11.3514 10.2031"
                stroke={teamColor ? "black" : "white"}
                stroke-width="2"
              />
            </svg>
          </LogoBlock>
        </Link>
        <HambergerBlock onClick={onOpenModal}>
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2H24"
              stroke={teamColor ? teamColor : "white"}
              stroke-width="3"
            />
            <path
              d="M0 10H24"
              stroke={teamColor ? teamColor : "white"}
              stroke-width="3"
            />
            <path
              d="M0 18H24"
              stroke={teamColor ? teamColor : "white"}
              stroke-width="3"
            />
          </svg>
        </HambergerBlock>
      </HeaderBlock>
      <HambergerModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        userName={userName}
        teamColor={teamColor}
        menu1Floor={menu1Floor}
        menu2Floor={menu2Floor}
      ></HambergerModal>
    </>
  );
}
