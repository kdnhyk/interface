import styled from "styled-components";
import Input from "../../components/Input";
import WriteForm from "../../components/WriteForm";

const WriteBlock = styled.div`
  width: 100%;
  height: 100%;
  background: #d9d9d9;
  padding: 20px;
  box-sizing: border-box;
`;

export default function Write() {
  return (
    <WriteBlock>
      <WriteForm />
    </WriteBlock>
  );
}
