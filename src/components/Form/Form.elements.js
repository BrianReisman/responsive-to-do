import styled from "styled-components";

//*Form
export const FormRoot = styled.form`
  display: flex;
  /* justify-content: space-around; */ //allows custom placing of input relative to checkbox
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  max-width: 800px;
  background: #ffffff66;
  background-color: #25273c;
  border-radius: 7px;
  margin-bottom: 72px;
  position: relative;

  input[type="checkbox"] + label {
    ::before {
      content: "";
      position: absolute;
      top: 22px;
      left: 16px;
      width: 28px;
      height: 28px;
      border: 2px solid #ffffff40;
      border-radius: 50%;
      transition: 0.5s; //this code is also in Input.
    }
  }
`;

//* Checkbox
export const Checkbox = styled.input`
  opacity: 0;
`;

export const CheckboxLabel = styled.label`
  /* position: relative; */
`;

//* Label
export const TextInputLabel = styled.label`
  /* border: 2px solid yellow; */
  margin-left: 60px;
  position: relative;
  border-radius: 7px;
  flex-basis: 700px;
`;
export const TextInput = styled.input`
  cursor: default;
  border-radius: 7px;
  border: none;
  color: #ffffff40;
  outline: none;
  width: 100%;
  position: relative;
  font-family: Verdana;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  padding: 24px 20px 24px 0px;
  background: #ffffff66;
  background-color: #25273c;
  caret-color: #72bef8;
  :focus {
    color: #ffffff;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
