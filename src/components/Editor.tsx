import styled from "styled-components";
import ReactQuill from "react-quill";
import { useMemo, useRef } from "react";
import "react-quill/dist/quill.snow.css";

const EditorBlock = styled.div`
  width: 100%;
  height: 100%;
`;

const formats = [
  "header",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "color",
  "background",
];

interface IsEditor {
  placeholder: string;
  value: any;
}

export default function Editor({ placeholder, value, ...rest }: IsEditor) {
  const quillRef = useRef<any>(null);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, "link"],
          [{ color: [] }, { background: [] }],
        ],
      },
    };
  }, []);

  return (
    <EditorBlock>
      <ReactQuill
        {...rest}
        ref={quillRef}
        value={value || ""}
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        preserveWhitespace
      ></ReactQuill>
    </EditorBlock>
  );
}
