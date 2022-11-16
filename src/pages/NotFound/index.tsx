import styled from "styled-components";
import Span from "../../components/Span";

const NotFoundBlock = styled.div``;

const MainBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const TitleBlock = styled.div`
  margin-bottom: 10px;
`;

export default function NotFound() {
  return (
    <NotFoundBlock>
      <MainBlock>
        <TitleBlock>
          <Span fontSize={40} fontWeight="bold">
            Developing...
          </Span>
        </TitleBlock>

        <Span fontSize={20} fontWeight="bold">
          This page shoud be used soon.
        </Span>
        <Span fontSize={20} fontWeight="bold">
          Please use another page.
        </Span>
      </MainBlock>
    </NotFoundBlock>
  );
}
