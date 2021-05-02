import styled from "styled-components";

export const DashboardRoot = styled.div`
  /* border: 1px solid white; */
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  padding: 27px 16px;

  color: #ffffff40;
`;
export const ItemsLeft = styled.p`
  /* background-color: red; */
`;
export const Filter = styled.div`
  display: flex;
  /* background-color: red; */
  .active {
    color: #72bef8;
    padding: 0 12px;
    cursor: default;
  }
`;
export const FilterOption = styled.p`
  padding: 0 12px;
  cursor: default;
  :hover {
    color: #fff;
  }
  /* background-color: blue; */
`;
export const ClearCompleted = styled.p`
  cursor: default;
  /* background-color: green; */
  :hover {
    color: #fff;
  }
`;

export const Main = styled.main`
  display: flex;
  /* border: 1px solid red; */
  width: 100%;
  justify-content: space-between;
`;

export const MobileFilter = styled.div`
  height: 100px;
  width: 100px;
  border-bottom: green;
  border-top: greenyellow;
`;
