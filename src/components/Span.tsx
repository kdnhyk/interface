import styled from "styled-components";

interface IsSpanStyle {
  color?: string;
  size?: number;
  fontWeight?: string;
}

const SpanBlock = styled.span<IsSpanStyle>`
  color: ${({ color }) => (color ? color : "inherit")};
  font-size: ${({ size }) => (size ? size + "px" : "12px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : null)};
`;

interface IsSpan extends IsSpanStyle {
  children: string;
}

export default function Span({ color, size, fontWeight, children }: IsSpan) {
  return (
    <SpanBlock color={color} size={size} fontWeight={fontWeight}>
      {children}
    </SpanBlock>
  );
}
