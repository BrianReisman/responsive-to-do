import styled from "styled-components";
import close from "../../assets/images/icon__close.svg";
import closeHover from "../../assets/images/icon__close_hover.svg";

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
  position: relative;
  display: flex;
  align-items: center;
  background: #25273c;
  border-bottom: 1px solid #ffffff20;
`;
export const TaskText = styled.p`
  font-family: Verdana;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  /* line-height: 24px; */
  margin: 24px 0 24px 60px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
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
