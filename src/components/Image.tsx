import styled from "styled-components";

const ImageBlock = styled.img<{
  width?: number;
  height?: number;
}>`
  width: ${({ width }) => (width ? width + "px" : "120px")};
  height: ${({ height }) => (height ? height + "px" : "120px")};
`;

interface ImageProps {
  width?: number;
  height?: number;
  alt: string;
  src: string;
}

export default function Image({ width, height, alt, src }: ImageProps) {
  return <ImageBlock alt={alt} src={src}></ImageBlock>;
}
