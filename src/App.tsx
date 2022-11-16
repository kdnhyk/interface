import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Archive from "./pages/Archive";
import Account from "./pages/Account";
import Footer from "./components/Footer";
import { Teams } from "./store/teams";
import Login from "./pages/Account/Login";
import GuestBook from "./pages/GuestBook";
import NotFound from "./pages/NotFound";

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
    a {
      text-decoration: none;
      color: inherit;
    }

  }
`;

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RecoilRoot>
        <Routes>
          {/* <Route path="/signin" element={} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/board/*" element={<Board />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/guestbook" element={<GuestBook />} />

          {Teams[0].units.map((team) => (
            <Route
              path={team.name}
              element={
                <Archive
                  userName="강동혁"
                  teamColor={team.color}
                  menu1={team.menu1}
                  menu2={team.menu2}
                />
              }
            />
          ))}
          {Teams[1].units.map((team) => (
            <Route
              path={team.name}
              element={
                <Archive
                  userName="강동혁"
                  teamColor={team.color}
                  menu1={team.menu1}
                  menu2={team.menu2}
                />
              }
            />
          ))}
          {/* <Route element={} /> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
