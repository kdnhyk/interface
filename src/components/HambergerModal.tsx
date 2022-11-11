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
  border: ${({ teamColor }) =>
    teamColor ? "1px solid white" : "1px solid black"};
  box-sizing: border-box;
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

  a {
    &:hover {
      background: #c0c0c0;
    }
  }
`;

const ModalHeaderBlock = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0px 14px 0px 0px;
  margin-bottom: 10px;
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
    margin-bottom: 20px;
  }
  .F2 {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  .F3 {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
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
  height: calc(100% - 212px);
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
                <Span fontWeight="bold">메인</Span>
              </Link>
            </div>
            {menu1Floor ? (
              <div className="F2">
                {menu1Floor.map((menu) => (
                  <Span fontWeight="bold">{menu}</Span>
                ))}
              </div>
            ) : (
              <div className="F2">
                <Link to="/starter">
                  <Span fontWeight="bold">입문</Span>
                </Link>
                <Link to="/trick">
                  <Span fontWeight="bold">트릭</Span>
                </Link>
                <Link to="/spot">
                  <Span fontWeight="bold">스팟</Span>
                </Link>
                <Link to="/fashion">
                  <Span fontWeight="bold">의류</Span>
                </Link>
              </div>
            )}
            {menu2Floor ? (
              <div className="F3">
                {menu2Floor.map((menu) => (
                  <Span fontWeight="bold">{menu}</Span>
                ))}
              </div>
            ) : (
              <div className="F3">
                <Link to="/guestbook">
                  <Span fontWeight="bold">방명록</Span>
                </Link>
              </div>
            )}
          </ModalMenuBlock>
          <ModalLoginBlock teamColor={teamColor}>
            {userName ? (
              <Link to={"/account"}>
                <Span color={teamColor}>{userName}</Span>
              </Link>
            ) : (
              <Link to={"/account"}>
                <Span>login</Span>
              </Link>
            )}
          </ModalLoginBlock>
          <ModalMainBlock>
            <ModalMainClubsBlock teamColor={teamColor}>
              <div className="Sort">
                <Span>{Teams[0].sort}</Span>
              </div>
              {Teams[0].units.map((team) => (
                <Span>{team.name}</Span>
              ))}
            </ModalMainClubsBlock>
            <ModalMainCrewsBlock>
              <div className="Sort">
                <Span>{Teams[1].sort}</Span>
              </div>
              {Teams[1].units.map((team) => (
                <Link to={"/" + team.name}>
                  <Span>{team.name}</Span>
                </Link>
              ))}
            </ModalMainCrewsBlock>
          </ModalMainBlock>
        </ModalBlock>
      )}
    </HambergerModalBlock>
  );
}
