import styled from "styled-components";

interface IsIconButtonStyle {
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
}

const IconButtonBlock = styled.div``;

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
