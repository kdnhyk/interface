import styled from "styled-components";

interface IsSpanStyle {
  color?: string;
  fontSize?: number;
  fontWeight?: string;
}

const SpanBlock = styled.span<IsSpanStyle>`
  color: ${({ color }) => (color ? color : "inherit")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "12px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : null)};
`;

interface IsSpan extends IsSpanStyle {
  children: string;
}

export default function Span({
  color,
  fontSize,
  fontWeight,
  children,
}: IsSpan) {
  return (
    <SpanBlock color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </SpanBlock>
  );
}
