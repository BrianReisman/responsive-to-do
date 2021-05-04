// Import React testing methods
import { render, screen } from "@testing-library/react";

// The component to test
import Display from "../components/Display/Display";

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
});

describe("tasks change with different filter options", () => {
  test("with filter 'all', 3/3 tests render", async () => {
    render(
      <Display
        activeFilter="all"
        tasks={[
          { task: "duplicate 1", completed: false },
          { task: "duplicate 2", completed: true },
          { task: "duplicate 3", completed: true },
        ]}
      />
    );
    const twoTasks = screen.getAllByText(/duplicate/i);
    expect(twoTasks).toHaveLength(3);
  });
  test("with filter 'active', 1/3 tests render", async () => {
    render(
      <Display
        activeFilter="active"
        tasks={[
          { task: "duplicate 1", completed: false },
          { task: "duplicate 2", completed: true },
          { task: "duplicate 3", completed: true },
        ]}
      />
    );
    const tasksInCompletedView = screen.getAllByText(/duplicate/i);
    expect(tasksInCompletedView).toHaveLength(1);
  });
  test("with filter 'complete', 2/3 tests render", async () => {
    render(
      <Display
        activeFilter="complete"
        tasks={[
          { task: "duplicate 1", completed: false },
          { task: "duplicate 2", completed: true },
          { task: "duplicate 3", completed: true },
        ]}
      />
    );
    const tasksInActiveView = screen.getAllByText(/duplicate/i);
    expect(tasksInActiveView).toHaveLength(2);
  });
});
