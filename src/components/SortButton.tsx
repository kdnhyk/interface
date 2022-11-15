import styled from "styled-components";
import Span from "./Span";

interface IsButtonStyle {
  backgroundColor?: string;
  fontSize?: number;
  fontWeight?: string;
}

const SortButtonBlock = styled.div<IsButtonStyle>`
  width: 90px;
  height: 36px;
  background: ${({ backgroundColor }) => backgroundColor || "black"};
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

interface IsSortButton extends IsButtonStyle {
  children: string;
  color?: string;
  onClick?: () => void;
}

export default function SortButton({
  color = "white",
  backgroundColor,
  fontSize,
  fontWeight = "bold",
  children,
  onClick,
}: IsSortButton) {
  return (
    <SortButtonBlock backgroundColor={backgroundColor} onClick={onClick}>
      <Span color={color} size={fontSize} fontWeight={fontWeight}>
        {children}
      </Span>
    </SortButtonBlock>
  );
}
