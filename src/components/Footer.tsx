import styled from "styled-components";
import Span from "./Span";

const FooterBlock = styled.div`
  height: 44px;
  background: black;
  color: #787878;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <FooterBlock>
      <Span fontSize={12}> © 2022 INTERFACE ARCHIVE </Span>
    </FooterBlock>
  );
}
