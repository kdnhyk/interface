import styled from "styled-components";
import Span from "../../components/Span";
import IconButton from "../../components/IconButton";
import { useFirestore } from "../../hooks/useFirestore";
import { authSelector } from "../../store/Auth";
import { useRecoilState } from "recoil";

const GuestBookListBlock = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const UnitBlock = styled.li`
  width: 100%;
  height: fit-content;
  min-height: 50px;
  padding: 20px;
  box-sizing: border-box;

  border-bottom: 1px solid #d9d9d9;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .IconButton {
    display: none;
  }
  &:hover {
    .IconButton {
      display: block;
      transition: all 0.3s;
    }
  }
`;

const SpanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const ButtonWrapper = styled.div`
  width: 13px;
  height: 15px;
`;

export default function GuestBookList({ documents }: any) {
  const { deleteDocument } = useFirestore("GuestBook");
  const handleButton = (e: any) => {
    deleteDocument(e.target.id);
  };

  const [currentUser] = useRecoilState(authSelector);

  return (
    <GuestBookListBlock>
      {documents.map((doc: any) => (
        <UnitBlock>
          <SpanWrapper>
            <Span size={10} color="#C0C0C0">
              {"__@" + doc.userName}
            </Span>
            <Span>{doc.content}</Span>
          </SpanWrapper>
          <ButtonWrapper>
            {currentUser.user && currentUser.user.uid === doc.userId && (
              <IconButton
                className="IconButton"
                backgroundColor="inherit"
                id={doc.id}
                onClick={handleButton}
              >
                <svg
                  width="13"
                  height="15"
                  viewBox="0 0 13 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1C0.734783 1 0.48043 1.10536 0.292893 1.29289C0.105357 1.48043 0 1.73478 0 2V3C0 3.26522 0.105357 3.51957 0.292893 3.70711C0.48043 3.89464 0.734783 4 1 4H1.5V13C1.5 13.5304 1.71071 14.0391 2.08579 14.4142C2.46086 14.7893 2.96957 15 3.5 15H9.5C10.0304 15 10.5391 14.7893 10.9142 14.4142C11.2893 14.0391 11.5 13.5304 11.5 13V4H12C12.2652 4 12.5196 3.89464 12.7071 3.70711C12.8946 3.51957 13 3.26522 13 3V2C13 1.73478 12.8946 1.48043 12.7071 1.29289C12.5196 1.10536 12.2652 1 12 1H8.5C8.5 0.734784 8.39464 0.48043 8.20711 0.292893C8.01957 0.105357 7.76522 0 7.5 0L5.5 0C5.23478 0 4.98043 0.105357 4.79289 0.292893C4.60536 0.48043 4.5 0.734784 4.5 1H1ZM4 5C4.13261 5 4.25978 5.05268 4.35355 5.14645C4.44732 5.24021 4.5 5.36739 4.5 5.5V12.5C4.5 12.6326 4.44732 12.7598 4.35355 12.8536C4.25978 12.9473 4.13261 13 4 13C3.86739 13 3.74021 12.9473 3.64645 12.8536C3.55268 12.7598 3.5 12.6326 3.5 12.5V5.5C3.5 5.36739 3.55268 5.24021 3.64645 5.14645C3.74021 5.05268 3.86739 5 4 5V5ZM6.5 5C6.63261 5 6.75979 5.05268 6.85355 5.14645C6.94732 5.24021 7 5.36739 7 5.5V12.5C7 12.6326 6.94732 12.7598 6.85355 12.8536C6.75979 12.9473 6.63261 13 6.5 13C6.36739 13 6.24021 12.9473 6.14645 12.8536C6.05268 12.7598 6 12.6326 6 12.5V5.5C6 5.36739 6.05268 5.24021 6.14645 5.14645C6.24021 5.05268 6.36739 5 6.5 5V5ZM9.5 5.5V12.5C9.5 12.6326 9.44732 12.7598 9.35355 12.8536C9.25979 12.9473 9.13261 13 9 13C8.86739 13 8.74021 12.9473 8.64645 12.8536C8.55268 12.7598 8.5 12.6326 8.5 12.5V5.5C8.5 5.36739 8.55268 5.24021 8.64645 5.14645C8.74021 5.05268 8.86739 5 9 5C9.13261 5 9.25979 5.05268 9.35355 5.14645C9.44732 5.24021 9.5 5.36739 9.5 5.5V5.5Z"
                    fill="black"
                  />
                </svg>
              </IconButton>
            )}
          </ButtonWrapper>
        </UnitBlock>
      ))}
    </GuestBookListBlock>
  );
}
