import styled from "styled-components";

export const OptionRoot = styled.div`
  background: #f3f4fa;
  border-radius: 20px;
  height: 80px;
  cursor: pointer;
  display: flex;
  flex: 0;
  align-items: center;
  border: ${({ check }) => (check ? "4px solid #44B77B" : "4px solid #f3f4fa")};
`;

export const OptionsContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: white;
  flex: 1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: 7rem;
  overflow: hidden;
  height: calc(100% - 5rem);
  padding-bottom: 5rem;
  position: relative;
`;

export const QuestionRoot = styled.div`
  background: #af9cf3;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  height: 100%;
`;
