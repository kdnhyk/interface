import styled from "styled-components";

interface IsTextareaStyle {
  fontSize?: number;
}

const TextareaBlock = styled.textarea<IsTextareaStyle>`
  width: 100%;
  height: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "12px")};

  padding: 10px;
  box-sizing: border-box;

  resize: none;
`;

interface IsTextarea extends IsTextareaStyle {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: any;
}

export default function Textarea({
  name,
  placeholder,
  value,
  onChange,
  fontSize,
  required,
}: IsTextarea) {
  return (
    <TextareaBlock
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fontSize={fontSize}
      required={required}
    ></TextareaBlock>
  );
}
