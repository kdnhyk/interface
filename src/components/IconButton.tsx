import styled from "styled-components";

interface IsIconButtonStyle {
  backgroundColor?: string;
}

const IconButtonBlock = styled.div<IsIconButtonStyle>`
  width: 100%;
  height: 100%;

  background: ${({ backgroundColor }) => backgroundColor || "inherit"};
`;

interface IsIconButton extends IsIconButtonStyle {
  id?: string;
  className?: string;
  children: any;
  onClick?: any;
}
export default function IconButton({
  id,
  className,
  children,
  onClick,
}: IsIconButton) {
  return (
    <IconButtonBlock id={id} className={className} onClick={onClick}>
      {children}
    </IconButtonBlock>
  );
}
