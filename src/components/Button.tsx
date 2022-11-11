import styled from "styled-components";

interface IsButtonStyle {
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
}

const ButtonBlock = styled.button<IsButtonStyle>`
  width: 100%;
  height: 100%;

  color: ${({ color }) => (color ? color : "white")};
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "black"};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : null)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : null)};

  border: none;

  &:hover,
  :focus,
  :active {
    background-color: #303030;
    transition: all 0.3s;
  }
`;

interface IsButton extends IsButtonStyle {
  id?: string;
  children: string;
  onClick?: any;
}

export default function Button({
  id,
  color,
  backgroundColor,
  children,
  onClick,
  ...rest
}: IsButton) {
  return (
    <ButtonBlock
      {...rest}
      id={id}
      color={color}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {children}
    </ButtonBlock>
  );
}
