import styled from "styled-components";
import img from "./assets/images/bg__trees.png";
// import check from './assets/images/icon__check.svg'
// import close from './assets/images/icon__close.svg'

export const Root = styled.div`
  background-color: #181824;
  height: 100vh;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const BackgroundImg = styled.div`
  padding-top: 88px;
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
  height: 40vh;
`;

export const Container = styled.div`
  /* border: 1px solid blue; */

  /* position: relative; */
  /* top: 152px; */
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  /* border: 1px solid red; */

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
`;
