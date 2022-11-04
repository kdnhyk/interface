import styled from "styled-components";

const RetroBorderBlock = styled.div<{
  width?: number | string;
  height?: number | string;
  color?: string;
}>`
  width: ${({ width }) =>
    width ? (typeof width === "number" ? width + "px" : width) : "40px"};
  height: ${({ height }) =>
    height ? (typeof height === "number" ? height + "px" : height) : "40px"};
  border-style: solid;
  border-width: 1px;
  border-color: white black black white;
  &:hover {
    border-color: black white white black;
  }
  box-sizing: border-box;

  background-color: ${({ color }) => (color ? color : "inherit")};
`;

const InnerBorderBlock = styled.div`
  width: 38px;
  height: 38px;
  border-style: solid;
  border-width: 1px;
  border-color: #c0c0c0 #6a6a6a #6a6a6a #c0c0c0;
  &:hover {
    border-color: #6a6a6a #c0c0c0 #c0c0c0 #6a6a6a;
  }
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IsRetroBorder {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  color?: string;
}
export default function RetroBorder({
  children,
  color,
  width,
  height,
}: IsRetroBorder) {
  return (
    <RetroBorderBlock width={width} height={height} color={color}>
      <InnerBorderBlock>{children}</InnerBorderBlock>
    </RetroBorderBlock>
  );
}
