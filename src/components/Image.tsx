import styled from "styled-components";

const ImageBlock = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

interface ImageProps {
  alt: string;
  src: string;
}

export default function Image({ alt, src }: ImageProps) {
  return <ImageBlock alt={alt} src={src}></ImageBlock>;
}
