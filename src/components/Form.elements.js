import styled from "styled-components";

//*Form
export const FormRoot = styled.form`
  /* border: 2px solid pink; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 800px;
  box-sizing: border-box;
  background: #ffffff66;
  background-color: #25273c;
  border-radius: 7px;
  margin-bottom: 72px;
`;

//* Checkbox
export const Checkbox = styled.input`
  /* width: 100px; */
  /* display: none; */
`;
/* background: url(${emptyCheck}); */
export const CheckboxLabel = styled.label`
  /* border: 3px solid red; */
  position: relative;
  ::before {
    content: "";
    background-position: center;
    background-size: contain;
    width: 26px;
    height: 26px;
    position: absolute;
    /* left: -44px; */
    /* top: -8px; */
  }
  ::after {
    content: "";
    border: 1px solid white;
    width: 26px;
    height: 26px;
    position: absolute;
    border-radius: 50%;
  }
`;

//* Label
export const TextInputLabel = styled.label`
  /* border: 3px solid red; */
`;
export const TextInput = styled.input`
  cursor: default;

  border: none;
  color: #ffffff40;
  outline: none;

  width: 700px;
  font-family: Verdana;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  padding: 24px 0 24px;
  background: #ffffff66;
  background-color: #25273c;
  /* caret-color: #72bef8; */ //*
`;
