import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Archive from "./pages/Archive";
import Login from "./pages/Account";
import Footer from "./components/Footer";
import { Teams } from "./store/teams";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    border: 2px solid #C0C0C0;
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
      <Routes>
        {/* <Route path="/signin" element={} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/login" element={<Login />} />
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
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}
