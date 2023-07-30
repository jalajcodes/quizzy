import styled from "styled-components";

export const Primary = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#FF7275" : "#ff3b3f")};
  width: 92%;
  height: 50px;
  border-radius: 80px;
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translate(-50%);
  text-decoration: none;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
