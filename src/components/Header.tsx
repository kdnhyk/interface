import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HambergerModal from "./HambergerModal";

const HeaderBlock = styled.div`
  height: 46px;
  background: black;
  display: flex;
  align-items: center;
`;

const LogoBlock = styled.div`
  svg {
    cursor: pointer;
  }
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const HambergerBlock = styled.div`
  cursor: pointer;
  position: absolute;
  right: 12px;
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
        {!teamColor && (
          <LogoBlock>
            <Link to="/">
              <svg
                width="153"
                height="21"
                viewBox="0 0 153 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.96 18.76H3.2V2.24H0.96V-1.66893e-06H8.016V2.24H5.776V18.76H8.016V21H0.96V18.76ZM16.7408 18.76H18.7008V21H12.2048V18.76H14.1648V5.04H12.2048V2.8H18.0288L26.2048 18.256V5.04H24.2448V2.8H30.7408V5.04H28.7808V21H24.9168L16.7408 5.572V18.76ZM44.8955 21H36.7195V18.76H39.5195V5.04H35.6555V8.288H33.5275V2.8H48.0875V8.288H45.9595V5.04H42.0955V18.76H44.8955V21ZM51.1697 2.8H64.4977V8.288H62.2577V5.04H55.7057V10.78H62.2577V13.02H55.7057V18.76H62.2577V15.512H64.4977V21H51.1697V18.76H53.1297V5.04H51.1697V2.8ZM68.9705 2.8H80.1705L83.0825 5.88V11.48L80.2545 14.448L82.8585 18.76H84.3425V21H79.3585V18.76H80.1425L77.6225 14.56H73.5065V18.76H75.1865V21H68.9705V18.76H70.9305V5.04H68.9705V2.8ZM73.5065 5.208V12.152H79.0505L80.6745 10.5V6.86L79.0785 5.208H73.5065ZM88.5486 2.8H101.877V8.288H99.6366V5.04H93.0846V10.78H99.6366V13.02H93.0846V18.76H95.3246V21H88.5486V18.76H90.5086V5.04H88.5486V2.8ZM114.044 21V18.76H115.892L114.688 15.288H107.688L106.484 18.76H108.36V21H102.424V18.76H103.908L108.64 5.04H107.464V2.8H114.94V5.04H113.736L118.468 18.76H119.98V21H114.044ZM111.188 5.124L108.444 13.048H113.932L111.188 5.124ZM133.286 14.392H135.526V17.92L132.614 21H125.558L122.646 17.92V5.88L125.558 2.8H132.614L135.526 5.88V9.408H133.286V7.028L131.522 5.208H126.678L125.222 6.692V17.108L126.65 18.592H131.494L133.286 16.772V14.392ZM139.435 -1.66893e-06H152.763V5.488H150.523V2.24H143.971V9.38H150.523V11.62H143.971V18.76H150.523V15.512H152.763V21H139.435V18.76H141.395V2.24H139.435V-1.66893e-06Z"
                  fill="white"
                />
              </svg>
            </Link>
          </LogoBlock>
        )}

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
