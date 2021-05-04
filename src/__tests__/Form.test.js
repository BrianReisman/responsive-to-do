import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from "../components/Form/Form";

describe("<Form/>", () => {
  let input;
  let tasks = [];

  beforeEach(() => {
    render(<Form tasks={tasks} setTasks={() => {}} />);
    input = screen.getByPlaceholderText(/create a new item.../i);
  });

  test("empty input present with placeholder text of 'create a new item...'", () => {
    expect(input).toHaveValue("");
  });

  test("input field is enabled for typing", () => {
    userEvent.type(input, "test task");
    expect(input).toHaveValue("test task");
  });
  test("input field is cleared on enter", () => {
    userEvent.type(input, "test task");
    fireEvent.submit(input);
    const inputAfterSumbit = screen.getByPlaceholderText(/create/i);
    expect(inputAfterSumbit).toHaveValue("");
  });
});
