import styled from "styled-components";
import { Link } from "react-router-dom";
import Span from "./Span";
import { Teams } from "../store/teams";

const HambergerModalBlock = styled.div``;

const ModalBlock = styled.div<{ teamColor?: string }>`
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  max-width: 375px;
  height: 100%;
  color: ${({ teamColor }) => (teamColor ? "white" : "balck")};
  background: ${({ teamColor }) => (teamColor ? "black" : "white")};
  border-left: ${({ teamColor }) =>
    teamColor ? "1px solid white" : "1px solid black"};
  @keyframes modalSlide {
    from {
      right: -100%;
    }
    to {
      right: 0;
    }
  }
  transform: modalSlide;
  animation: modalSlide 0.2s ease forwards;
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

const ModalHeaderCloseBlock = styled.div`
  cursor: pointer;
`;

const ModalMenuBlock = styled.div`
  width: 100%;
  height: 100px;
  padding-left: 15px;
  padding-right: 45px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .F1 {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
  }
  .F2 {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
  }
  .F3 {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
  }
`;

const ModalLoginBlock = styled.div<{ teamColor?: string }>`
  width: 100%;
  height: 56px;

  border-bottom: ${({ teamColor }) =>
    teamColor ? "1px solid white" : "1px solid black"};
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const ModalMainBlock = styled.div`
  width: 100%;
  height: calc(100% - 196px);
  display: flex;
`;

const ModalMainClubsBlock = styled.div<{ teamColor?: string }>`
  width: 50%;
  padding: 10px 20px 25px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .Sort {
    margin-bottom: 10px;
  }

  border-right: ${({ teamColor }) =>
    teamColor ? "1px solid white" : "1px solid black"};
`;

const ModalMainCrewsBlock = styled.div`
  width: 50%;
  padding: 10px 20px 25px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .Sort {
    margin-bottom: 10px;
  }
`;

interface HambergerModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  teamColor?: string;
  menu1Floor?: string[];
  menu2Floor?: string[];
}

export default function HambergerModal({
  isOpen,
  onClose,
  userName,
  teamColor,
  menu1Floor,
  menu2Floor,
}: HambergerModalProps) {
  return (
    <HambergerModalBlock>
      {isOpen && (
        <ModalBlock teamColor={teamColor}>
          <ModalHeaderBlock>
            <ModalHeaderCloseBlock onClick={onClose}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L12 12L22 22M2 22L22 2"
                  stroke={teamColor ? teamColor : "black"}
                  stroke-width="3"
                />
              </svg>
            </ModalHeaderCloseBlock>
          </ModalHeaderBlock>
          <ModalMenuBlock>
            <div className="F1">
              <Link to="/">
                <Span isBold={true}>메인</Span>
              </Link>
            </div>
            {menu1Floor ? (
              <div className="F2">
                {menu1Floor.map((menu) => (
                  <Span isBold={true}>menu</Span>
                ))}
              </div>
            ) : (
              <div className="F2">
                <Link to="/forum">
                  <Span isBold={true}>입문</Span>
                </Link>
                <Span isBold={true}>홍보</Span>
                <Span isBold={true}>의류</Span>
                <Span isBold={true}>익명</Span>
              </div>
            )}
            {menu2Floor ? (
              <div className="F2">
                {menu2Floor.map((menu) => (
                  <Span isBold={true}>menu</Span>
                ))}
              </div>
            ) : (
              <div className="F2">
                <Span isBold={true}>????</Span>
              </div>
            )}
          </ModalMenuBlock>
          <ModalLoginBlock teamColor={teamColor}>
            {userName ? (
              <Span color={teamColor}>{userName}</Span>
            ) : (
              <Span>login</Span>
            )}
          </ModalLoginBlock>
          <ModalMainBlock>
            <ModalMainClubsBlock teamColor={teamColor}>
              <div className="Sort">
                <Span>{Teams[0].title}</Span>
              </div>
              {Teams[0].units.map((team) => (
                <Span>{team}</Span>
              ))}
            </ModalMainClubsBlock>
            <ModalMainCrewsBlock>
              <div className="Sort">
                <Span>{Teams[1].title}</Span>
              </div>
              {Teams[1].units.map((team) => (
                <Link to="/archive">
                  <Span>{team}</Span>
                </Link>
              ))}
            </ModalMainCrewsBlock>
          </ModalMainBlock>
        </ModalBlock>
      )}
    </HambergerModalBlock>
  );
}
