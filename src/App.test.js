import { render, screen } from "@testing-library/react";
import Display from "./components/Display/Display";
import userEvent from "@testing-library/user-event";

describe("<Display/>", () => {
  beforeEach(() => {
    render(
      <Display
        tasks={[
          {
            id: 123,
            task: "sample task for testing",
            completed: false,
          },
        ]}
      />
    );
  });

  test("message present when there are no tasks", () => {
    render(<Display tasks={[]} />);
    const noItemsMessage = screen.getByText(
      /items in your todo list. Create an item to begin/i
    );
    expect(noItemsMessage).toBeInTheDocument();
  });

  test("message gone when task is present", () => {
    const noItemsMessage = screen.queryByText(
      /items in your todo list. Create an item to begin/i
    );
    expect(noItemsMessage).not.toBeInTheDocument();
  });

  test("added task is rendering", () => {
    const addedTask = screen.getByText(/sample task for test/i);
    expect(addedTask).toBeInTheDocument();
    const task = screen.getByText(/sample task for test/i).closest("div");
    screen.debug(task);
    const button = screen.getByRole("button");
    expect(addedTask).toBeInTheDocument();
    userEvent.click(button)
    expect(addedTask).toBeInTheDocument();
  });
});


// screen.debug
// .closet()