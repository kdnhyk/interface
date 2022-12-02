import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { useStorage } from "../hooks/useStorage";
import Span from "./Span";

interface IsImgageUploaderStyle {}

const ImgageUploaderBlock = styled.div`
  position: relative; ;
`;

const ImageBoxWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  z-index: 1;

  background: #d9d9d9;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }
`;

const ImgWrapper = styled.div<{ attachment: any }>`
  position: absolute;
  top: 0;
  z-index: ${({ attachment }) => attachment && "2"};
  width: 100px;
  height: 100px;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

interface IsImgageUploader extends IsImgageUploaderStyle {
  url: string;
  setImageURL: any;
}

export default function ImgageUploader({ url, setImageURL }: IsImgageUploader) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { upload, deleteImage } = useStorage();

  const [attachment, setAttachment] = useState<any>();
  const [file, setFile] = useState<any>();

  const onUploadImage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { files, value } = event.target;
      console.log(files);
      if (!files) return;

      const OriginFile = files[0];

      if (OriginFile.size > 1 * 1024 * 1024) {
        alert("이미지 파일 용량이 너무 큽니다.");
      }

      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        setAttachment(result);
      };
      reader.readAsDataURL(OriginFile);

      // 개선
      setFile(OriginFile);
      upload(OriginFile, setImageURL);
    },
    []
  );

  const onClearAttachment = () => {
    setAttachment(null);
    setFile("");
    deleteImage(url);
    inputRef.current!.value = "";
  };

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <ImgageUploaderBlock>
      <ImageBoxWrapper onClick={onUploadImageButtonClick}>
        <input
          type="file"
          ref={inputRef}
          accept="image/*"
          onChange={onUploadImage}
        />
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 16.6666C25.9889 16.6666 26.9556 16.3734 27.7779 15.824C28.6001 15.2746 29.241 14.4937 29.6194 13.58C29.9978 12.6664 30.0969 11.6611 29.9039 10.6912C29.711 9.72127 29.2348 8.83036 28.5355 8.13109C27.8363 7.43183 26.9454 6.95563 25.9755 6.7627C25.0055 6.56978 24.0002 6.66879 23.0866 7.04723C22.173 7.42567 21.3921 8.06653 20.8427 8.88878C20.2932 9.71102 20 10.6777 20 11.6666C20 12.9927 20.5268 14.2645 21.4645 15.2022C22.4021 16.1398 23.6739 16.6666 25 16.6666V16.6666ZM25 9.99996C25.3296 9.99996 25.6519 10.0977 25.926 10.2808C26.2 10.464 26.4137 10.7243 26.5398 11.0288C26.6659 11.3334 26.699 11.6685 26.6346 11.9918C26.5703 12.3151 26.4116 12.6121 26.1785 12.8451C25.9454 13.0782 25.6485 13.237 25.3252 13.3013C25.0019 13.3656 24.6667 13.3326 24.3622 13.2064C24.0577 13.0803 23.7974 12.8667 23.6142 12.5926C23.4311 12.3185 23.3333 11.9963 23.3333 11.6666C23.3333 11.2246 23.5089 10.8007 23.8215 10.4881C24.134 10.1756 24.558 9.99996 25 9.99996Z"
            fill="white"
          />
          <path
            d="M36.6667 0H3.33333C2.44928 0 1.60143 0.351189 0.976311 0.976311C0.351189 1.60143 0 2.44928 0 3.33333V36.6667C0 37.5507 0.351189 38.3986 0.976311 39.0237C1.60143 39.6488 2.44928 40 3.33333 40H36.6667C37.5507 40 38.3986 39.6488 39.0237 39.0237C39.6488 38.3986 40 37.5507 40 36.6667V3.33333C40 2.44928 39.6488 1.60143 39.0237 0.976311C38.3986 0.351189 37.5507 0 36.6667 0V0ZM36.6667 36.6667H3.33333V26.6667L11.6667 18.3333L20.9833 27.65C21.6079 28.2708 22.4527 28.6193 23.3333 28.6193C24.214 28.6193 25.0588 28.2708 25.6833 27.65L28.3333 25L36.6667 33.3333V36.6667ZM36.6667 28.6167L30.6833 22.6333C30.0588 22.0125 29.214 21.664 28.3333 21.664C27.4527 21.664 26.6079 22.0125 25.9833 22.6333L23.3333 25.2833L14.0167 15.9667C13.3921 15.3458 12.5473 14.9974 11.6667 14.9974C10.786 14.9974 9.94121 15.3458 9.31667 15.9667L3.33333 21.95V3.33333H36.6667V28.6167Z"
            fill="white"
          />
        </svg>
      </ImageBoxWrapper>
      <ImgWrapper attachment={attachment} onClick={onClearAttachment}>
        <img alt="a" src={attachment}></img>
      </ImgWrapper>
      {/*  <Span>{file ? file.name : "_"}</Span> */}
    </ImgageUploaderBlock>
  );
}
