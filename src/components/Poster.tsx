import styled from "styled-components";
import Image from "./Image";

const PosterBlock = styled.div<{
  width?: number;
  height?: number;
}>`
  width: ${({ width }) => (width ? width + "px" : "100%")};
  height: ${({ height }) => (height ? height + "px" : "100%")};
`;

interface IsPoster {
  width?: number;
  height?: number;
  alt: string;
  src: string;
}

export default function Poster({ width, height, alt, src }: IsPoster) {
  return (
    <PosterBlock width={width} height={height}>
      <Image alt={alt} src={src}></Image>
    </PosterBlock>
  );
}
