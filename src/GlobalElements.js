import styled from "styled-components";
import img from "./assets/images/bg__trees.png";

export const Root = styled.div`
  background-color: #181824;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

export const BackgroundImg = styled.div`
  padding: 88px 20px 0 20px;
  z-index: -1;
  background-image: linear-gradient(
      131.73deg,
      rgba(114, 190, 248, 0.8) 14.46%,
      rgba(166, 116, 242, 0.8) 87.62%
    ),
    url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 352px;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: #ffffff;
  height: 44px;
  width: 143px;
  font-family: Verdana;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0.25em;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
