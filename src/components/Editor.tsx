import styled from "styled-components";
import ReactQuill, { Quill } from "react-quill";
import { useEffect, useRef } from "react";

const EditorBlock = styled.div``;

// 사용하고 싶은 옵션, 나열 되었으면 하는 순서대로 나열
const toolbarOptions = [
  ["link", "image", "video"],
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike"],
  ["blockquote"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
];

// 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "background",
  "color",
  "link",
  "image",
  "video",
  "width",
];

const modules = {
  toolbar: {
    container: toolbarOptions,
  },
};

interface IsEditor {
  placeholder: string;
  value: any;
}

export default function Editor({ placeholder, value, ...rest }: IsEditor) {
  const quillRef = useRef<any>(null);

  useEffect(() => {
    const handleImage = () => {
      // 이미지 핸들 로직
    };

    if (quillRef.current) {
      const { getEditor } = quillRef.current;
      const toolbar = quillRef.current.getEditor().getModule("toolbar");
      toolbar.addHandler("image", handleImage);
    }
  }, []);

  return (
    <EditorBlock>
      <ReactQuill
        {...rest}
        ref={quillRef}
        value={value || ""}
        theme="snow"
        modules={{
          ...modules,
          imageResize: {
            parchment: Quill.import("parchment"),
            modules: ["Resize", "DisplaySize", "Toolbar"],
          },
        }}
        formats={formats}
        placeholder={placeholder}
        preserveWhitespace
      ></ReactQuill>
    </EditorBlock>
  );
}
