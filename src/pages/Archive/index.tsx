import styled from "styled-components";
import Header from "../../components/Header";
import Banner from "./Banner";
import Main from "./Main";

const ArchiveBlock = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  color: white;
`;

interface IsArchive {
  userName: string;
  teamColor: string;
  menu1: string[];
  menu2: string[];
}
export default function Archive({
  userName,
  teamColor,
  menu1,
  menu2,
}: IsArchive) {
  return (
    <ArchiveBlock>
      <Header
        userName={userName}
        teamColor={teamColor}
        menu1Floor={menu1}
        menu2Floor={menu2}
      />
      <Banner />
      <Main />
    </ArchiveBlock>
  );
}
