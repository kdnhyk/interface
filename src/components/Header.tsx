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
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 2V14.8H6.5H11M3 2L11 3.6M3 2H0.5M19 2L11 3.6M19 2V3.75M19 2V5.5M11 3.6V9.5M11 14.8H19V5.5M11 14.8V9.5M19 5.5V8L11 9.5"
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
