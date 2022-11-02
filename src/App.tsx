import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Archive from "./pages/Archive";

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
      <Routes>
        {/* <Route path="/signin" element={} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/archive" element={<Archive />} />
        {/* <Route element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}
