import styled from "styled-components";
import close from "../../assets/images/icon__close.svg";
import closeHover from "../../assets/images/icon__close_hover.svg";
import check from "../../assets/images/icon__check.svg";

export const DisplayRoot = styled.div`
  border-radius: 7px;
  width: 800px;
  background-color: #25273c;
  text-align: center;
`;
export const EmptyMessageContainer = styled.div`
  border-radius: 7px;
  width: 800px;
  background-color: #25273c;
  display: flex;
  justify-content: center;
  padding: 50px 154px;
`;
export const EmptyMessageText = styled.p`
  color: #ffffff;

  font-family: Verdana;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;

  height: 48px;
  width: 492px;
  left: 474px;
  top: 346px;
  border-radius: nullpx;
`;
export const Task = styled.div`
  border-radius: 7px 7px 0 0; //better way to get this via container?

  position: relative;
  display: flex;
  align-items: center;
  background: #25273c;
  border-bottom: 1px solid #ffffff20;

  label {
    transition: 0.5s; //this code is also in Input.
    ::before {
      content: "";
      position: absolute;
      top: -16px;
      width: 28px;
      height: 28px;
      border: 2px solid #ffffff40;
      border-radius: 50%;
      transition: 0.5s; //this code is also in Input.
    }
    :hover::before {
      transition: 0.5s; //this code is also in Input.
      border-image: linear-gradient(131.73deg, #72bef8 14.46%, #a674f2 87.62%);
      border-image-slice: 1;
      border-image-width: 1px;
      /* border-image-source: linear-gradient(
        131.73deg,
        #72bef8 14.46%,
        #a674f2 87.62%
      ); */
    }
  }
  input:checked + label::before {
    transition: 0.5s; //this code is also in Input.
    /* border: 2px solid green; */
    background-image: url(${check}),
      linear-gradient(131.73deg, #72bef8 14.46%, #a674f2 87.62%);
    background-size: cover;
    /* height: 50vh; */
  }
`;
export const TaskText = styled.p`
  text-decoration: ${(props) => (props.completed ? "line-through" : null)};
  color: ${(props) => (props.completed ? "#ffffff40" : "#ffffff")};
  font-family: Verdana;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  /* line-height: 24px; */
  margin: 24px 0 24px 60px;
  letter-spacing: 0em;
  text-align: left;
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
  position: relative;
  left: 16px;
  transition: 0.5s;
`;

export const CheckboxLabel = styled.label`
  position: relative;
  cursor: default;
  display: inline-block;
  color: #666;
`;
