import styled from "styled-components";
import img from "./assets/images/bg__trees.png";
import emptyCheck from "./assets/images/empty_check.svg";
// import check from './assets/images/icon__check.svg'
// import close from './assets/images/icon__close.svg'

export const Root = styled.div`
  background-color: #181824;
  height: 100vh;
  * {
    margin: 0;
    box-sizing: border-box;
  }
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
  height: 40vh;
`;

export const Container = styled.div`
  border: 1px solid blue;

  /* position: relative; */
  /* top: 152px; */
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  /* border: 1px solid red; */

  margin-top: 88px;
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

export const TextInput = styled.input`
  border: none;
  /* border: 3px solid black; */
  /* max-width: 800px; */

  width: 800px;
  border-radius: 7px;
  font-family: Verdana;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  padding: 24px 0 24px;
  background: #ffffff66;
  background-color: #25273c;
`;

export const Form = styled.form`
  background: #ffffff66;
  background-color: #25273c;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Checkbox = styled.input`
  /* width: 100px; */
  display: none;
`;

export const Label = styled.label`
  position: relative;
  ::before {
    content: "";
    background: url(${emptyCheck});
    background-position: center;
    background-size: contain;
    width: 26px;
    height: 26px;
    position: absolute;
    left: -44px;
    top: -8px;
  }
  ::after{
    content: '';
    border: 1px solid white;
    width: 26px;
    height: 26px;
    position: absolute;
    border-radius: 50%;

  }
`;
