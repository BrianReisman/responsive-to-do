import styled from "styled-components";
import close from "../../assets/images/icon__close.svg";
import closeHover from "../../assets/images/icon__close_hover.svg";
import check from "../../assets/images/icon__check.svg";

export const DisplayRoot = styled.div`
  max-width: 800px;
  text-align: center;
  border-radius: 7px;
  background-color: #25273c;
`;
export const EmptyMessageContainer = styled.div`
  border-radius: 7px;
  max-width: 800px;
  background-color: #25273c;
  display: flex;
  justify-content: center;
  padding: 50px 154px;
  @media (max-width: 600px) {
    padding: 30px 16px;
  }
`;
export const EmptyMessageText = styled.p`
  color: #ffffff;
  font-family: Verdana;
  font-size: 20px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const TaskRoot = styled.div`
  border-radius: 7px 7px 0 0;
  position: relative;
  display: flex;
  align-items: center;
  background: #25273c;
  border-bottom: 1px solid #ffffff20;

  label {
    ::before {
      margin: 0 5px;
      content: "";
      position: absolute;
      top: -16px;
      width: 28px;
      height: 28px;
      border: 2px solid #ffffff40;
      border-radius: 50%;
    }
  }
  input:checked + label::before {
    background-image: url(${check}),
      linear-gradient(131.73deg, #72bef8 14.46%, #a674f2 87.62%);
    background-size: cover;
  }
`;
export const TaskText = styled.p`
  text-decoration: ${(props) => (props.completed ? "line-through" : null)};
  color: ${(props) => (props.completed ? "#ffffff40" : "#ffffff")};
  font-family: Verdana;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  margin: 24px 60px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const Close = styled.button`
  position: absolute;
  right: 16px;
  outline: none;
  background-color: transparent;
  border: none;
  background-image: url(${close});
  height: 24px;
  width: 24px;
  :hover {
    background-image: url(${closeHover});
  }
`;
export const Input = styled.input`
  opacity: 0;
`;
export const CheckboxLabel = styled.label`
  position: relative;
  cursor: default;
`;
