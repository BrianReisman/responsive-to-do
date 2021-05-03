import { render, screen } from "@testing-library/react";
import Display from "./components/Display/Display";
import userEvent from "@testing-library/user-event";

describe("<Display/>", () => {
  beforeEach(() => {
    render(<Display tasks={[{}]} />);
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

  test("'item', singular, renders when only one task", () => {
    const plural = screen.queryByText(/items/i);
    expect(plural).not.toBeInTheDocument();
    const singular = screen.queryByText(/item/i);
    expect(singular).toBeInTheDocument();
  });
  test("'items', plural, renders when more than one task", () => {
    render(<Display tasks={[{}, {}]} />);
    const plural = screen.queryByText(/items/i);
    expect(plural).toBeInTheDocument();
    const singular = screen.queryByText(/^item$/);
    expect(singular).not.toBeInTheDocument();
  });
  test("that task change with changing props", async () => {
    const { rerender } = render(
      <Display
        tasks={[
          { task: "duplicate 1", completed: true },
          { task: "duplicate 2", completed: true },
        ]}
      />
    );
    const twoTasks = screen.getAllByText(/duplicate/i);
    expect(twoTasks).toHaveLength(2);

    // const completed = screen.getByText(/^completed$/i);
    // userEvent.click(completed)
    // const twoTasksCompleted = screen.getAllByText(/duplicate/i);
    // expect(twoTasksCompleted).toHaveLength(2);

    await rerender(
      <Display
        tasks={[
          { task: "duplicate 1", completed: false },
          { task: "duplicate 2", completed: true },
        ]}
      />
    );
    const afterPropsChange = screen.getAllByText(/duplicate/i);
    expect(afterPropsChange).toHaveLength(1);
  });
});

// expect(addedTask).toBeInTheDocument();
// const task = screen.getByText(/sample task for test/i).closest("div");

// screen.debug(task);

// const button = screen.getByRole("button");
// expect(addedTask).toBeInTheDocument();
// userEvent.click(button)
// expect(addedTask).toBeInTheDocument();

// screen.debug
// .closet()
