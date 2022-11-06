import styled from "styled-components";
import Input from "../../components/Input";

const WriteBlock = styled.div`
  width: 100%;
  height: 100%;
  background: white;
`;

export default function Write() {
  return (
    <WriteBlock>
      <Input />
      <button>save</button>
    </WriteBlock>
  );
}
