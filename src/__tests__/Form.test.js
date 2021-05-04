import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from "../components/Form/Form";

describe("<Form/>", () => {
  let input;
  beforeEach(() => {
    render(<Form />);
    input = screen.getByPlaceholderText(/create a new item.../i);
  });

  test("empty input present with placeholder text of 'create a new item...'", () => {
    expect(input).toHaveValue("");
  });

  test("input field is enabled for typing", () => {
    userEvent.type(input, "test task");
    expect(input).toHaveValue("test task");
  });

  // test("input field clears after hitting {enter}", async () => {
  //   console.log(input.)
  //   userEvent.type(input, "test task");
  //   userEvent.keyboard("{enter}");
  //   expect(input).toHaveValue("");
  //   const inputAfterSubmit = await screen.findByPlaceholderText(
  //     /create a new item.../i
  //   );
  //   console.log(inputAfterSubmit.pendingProps.value)
  //   expect(inputAfterSubmit).toHaveValue("");
  //   const afterEnter = screen.getByPlaceholderText(/create a new item.../i);
  // });
});
