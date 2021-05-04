import styled from "styled-components";
import img from "./assets/images/bg__trees.png";

export const Root = styled.div`
  /* width: 100vw; */
  /* border: 3px solid blue; */

  background-color: ${props => props.theme.background.main};
  height: 100vh;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
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
  padding: 20px;

`;

export const Title = styled.h1`
  /* border: 1px solid red; */

  margin-bottom: 20px;
  color: ${props => props.theme.text.main};
  height: 44px;
  width: 143px;
  font-family: Verdana;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0.25em;
  text-align: left;
  @media(max-width: 600px){
    font-size: 24px;
  }
`;
