import styled from "styled-components";

interface IsEmptyStyle {}

const EmptyBlock = styled.div``;

interface IsEmpty extends IsEmptyStyle {}

export default function Empty() {
  return <EmptyBlock></EmptyBlock>;
}
