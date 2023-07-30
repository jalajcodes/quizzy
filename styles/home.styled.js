import styled from "styled-components";

export const Root = styled.div`
  max-width: 380px;
  height: 100%;
  max-height: 710px;
  margin: auto;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: white;
  border-radius: 24px;
`;

export const GradientBackground = styled.div`
  background: linear-gradient(
      180deg,
      rgba(175, 156, 243, 0) 7.92%,
      #3cefff 86.48%
    ),
    white;
  height: 100%;
`;

export const Logo = styled.div`
  margin: auto;
  text-align: center;
  padding-top: 2rem;
`;

export const Circle = styled.div`
  background-color: white;
  height: 200px;
  width: 210px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.1));
`;

export const CircleText = styled.p`
  color: #ff3b3f;
  font-size: 40px;
  font-weight: bold;
`;
