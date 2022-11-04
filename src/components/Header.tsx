import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HambergerModal from "./HambergerModal";
import RetroBorder from "./RetroBorder";

const HeaderBlock = styled.div`
  height: 56px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 8px;
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
          {!teamColor && (
            <LogoBlock>
              <svg
                width="56"
                height="28"
                viewBox="0 0 56 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="14" fill="white" />
                <circle cx="8.99994" cy="19" r="7" fill="black" />
                <circle cx="19.0001" cy="8.99994" r="7" fill="black" />
                <path
                  d="M47.54 22L46.5 18.6H41.3L40.26 22H37L42.04 7.66H45.74L50.8 22L47.54 22ZM44.74 12.74C44.6733 12.5133 44.5867 12.2267 44.48 11.88C44.3733 11.5333 44.2667 11.18 44.16 10.82C44.0533 10.46 43.9667 10.1467 43.9 9.88C43.8333 10.1467 43.74 10.48 43.62 10.88C43.5133 11.2667 43.4067 11.64 43.3 12C43.2067 12.3467 43.1333 12.5933 43.08 12.74L42.06 16.06H45.78L44.74 12.74ZM51.9486 20.6C51.9486 19.9867 52.1153 19.56 52.4486 19.32C52.7819 19.0667 53.1886 18.94 53.6686 18.94C54.1353 18.94 54.5353 19.0667 54.8686 19.32C55.2019 19.56 55.3686 19.9867 55.3686 20.6C55.3686 21.1867 55.2019 21.6133 54.8686 21.88C54.5353 22.1333 54.1353 22.26 53.6686 22.26C53.1886 22.26 52.7819 22.1333 52.4486 21.88C52.1153 21.6133 51.9486 21.1867 51.9486 20.6Z"
                  fill="white"
                />
              </svg>
            </LogoBlock>
          )}
        </Link>
        <RetroBorder>
          <HambergerBlock onClick={onOpenModal}>
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2H24"
                stroke={teamColor ? teamColor : "white"}
                stroke-width="3"
              />
              <path
                d="M0 11H24"
                stroke={teamColor ? teamColor : "white"}
                stroke-width="3"
              />
              <path
                d="M0 20H24"
                stroke={teamColor ? teamColor : "white"}
                stroke-width="3"
              />
            </svg>
          </HambergerBlock>
        </RetroBorder>
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
