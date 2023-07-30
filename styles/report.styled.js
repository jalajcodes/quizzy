import styled from "styled-components";
export const ResultCountStyled = styled.div`
  background: ${({ correct }) => (correct ? "#E9F6EF" : "#FFE8E8")};
  border-radius: 20px;
  height: 80px;
  display: flex;
  align-items: center;
`;
