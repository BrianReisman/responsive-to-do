import styled from "styled-components";

export const DashboardRoot = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  padding: 27px 16px;
  color: #ffffff40;

  @media (max-width: 600px) {
    .filter {
      display: none;
    }
    .filter-mobile {
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
  width: 100%;
  justify-content: center;
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
    color: #ffffff;
  }
`;
export const ClearCompleted = styled.p`
  cursor: default;
  :hover {
    color: #ffffff;
  }
`;

export const MobileFilter = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  padding: 27px 16px;
  color: #ffffff40;
  background-color: #25273c;
  /* background-color: red; */
  border-radius: 7px;
  margin-top: 24px;
  .active {
    color: #72bef8;
    padding: 0 12px;
    cursor: default;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;
