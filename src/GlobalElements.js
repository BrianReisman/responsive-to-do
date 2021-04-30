import styled from "styled-components";
import img from "./assets/images/bg__trees.png";

export const Root = styled.div`
  background-color: #181824;
  height: 100vh;
`;

export const BackgroundImg = styled.div`
  z-index: -10;
  background-image: linear-gradient(
      131.73deg,
      rgba(114, 190, 248, 0.8) 14.46%,
      rgba(166, 116, 242, 0.8) 87.62%
    ),
    url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 45vh;
`;
