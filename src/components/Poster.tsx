import styled from "styled-components";
import Image from "./Image";

const PosterBlock = styled.div`
  margin-bottom: 10px;
`;

interface IsPoster {
  alt: string;
  src: string;
}

export default function Poster({ alt, src }: IsPoster) {
  return (
    <PosterBlock>
      <Image
        width={355}
        height={355}
        alt={alt}
        src={require(src).default}
      ></Image>
    </PosterBlock>
  );
}
