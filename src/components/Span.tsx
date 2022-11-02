import styled from "styled-components";

const SpanBlock = styled.span<{
  color?: string;
  size?: number;
  isBold?: boolean;
}>`
  color: ${({ color }) => (color ? color : "inherit")};
  font-size: ${({ size }) => (size ? size + "px" : "14px")};
  font-weight: ${({ isBold }) => isBold && "bold"};
`;

export interface IsSpan {
  color?: string;
  size?: number;
  isBold?: boolean;
  children: string;
}

export default function Span({ color, size, isBold, children }: IsSpan) {
  return (
    <SpanBlock color={color} size={size} isBold={isBold}>
      {children}
    </SpanBlock>
  );
}
