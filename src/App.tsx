import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        {/* <Route path="/signin" element={} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}
