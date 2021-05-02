import styled from "styled-components";

//*Form
export const FormRoot = styled.form`
  * {
    /* border: 1px solid red; */
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  width: 800px;
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
  /* border: 3px solid red; */
  opacity: 0;
`;

export const CheckboxLabel = styled.label`
  /* border: 3px solid red; */
  /* position: relative; */
`;

//* Label
export const TextInputLabel = styled.label`
  /* border: 3px solid red; */
`;
export const TextInput = styled.input`
  cursor: default;
  border: none;
  /* border: 2px solid pink; */
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
  caret-color: #72bef8;
  :focus {
    color: #ffffff;
  }
`;
