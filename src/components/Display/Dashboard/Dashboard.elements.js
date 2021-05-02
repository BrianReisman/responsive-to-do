import styled from "styled-components";

export const DashboardRoot = styled.div`
  border: 1px solid white;
  
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  padding: 27px 16px;
  color: #ffffff40;

  @media (max-width: 600px) {
    .filter {
      display: none;
    }
    .filter-mobile{
      display: block;
      margin: 25px;
    }
  }
`;
export const ItemsLeft = styled.p`
  /* background-color: red; */
`;
export const Filter = styled.div`
  display: flex;
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

export const MobileFilter = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  padding: 27px 16px;
  color: #ffffff40;
  background-color: #25273C;
  border-radius: 7px;

  margin-top: 24px;

  @media (min-width: 600px) {
    /* .filter { */
      display: none;
    /* } */
  }
`;
