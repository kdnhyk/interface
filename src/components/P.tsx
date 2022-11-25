import styled from "styled-components";

interface IsPStyle {
  color?: string;
  fontSize?: number;
  fontWeight?: string;
}

const PBlock = styled.p<IsPStyle>`
  color: ${({ color }) => (color ? color : "inherit")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "12px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : null)};

  margin: 4px 0px;
`;

interface IsP extends IsPStyle {
  children: string;
}

export default function P({ color, fontSize, fontWeight, children }: IsP) {
  return (
    <PBlock color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </PBlock>
  );
}
