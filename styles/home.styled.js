import styled from "styled-components";

export const Root = styled.div`
  max-width: 380px;
  height: 100%;
  margin: auto;
  border: 1px solid black;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

export const GradientBackground = styled.div`
  background: linear-gradient(
    180deg,
    rgba(175, 156, 243, 0) 7.92%,
    #af9cf3 86.48%
  );
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
