import styled from "styled-components";

interface IsInputStyle {
  fontSize?: number;
}

const InputBlock = styled.input<IsInputStyle>`
  width: 100%;
  height: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "12px")};

  padding: 10px;
  box-sizing: border-box;
`;

interface IsInput extends IsInputStyle {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: any;
}

export default function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
  fontSize,
  required,
}: IsInput) {
  return (
    <InputBlock
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fontSize={fontSize}
      required={required}
    ></InputBlock>
  );
}
