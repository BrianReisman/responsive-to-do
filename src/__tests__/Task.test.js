import Task from "../components/Display/Task/Task";

import { render } from "@testing-library/react";

describe("Task tests", () => {
  const task = {
    id: 123,
    task: "test task",
  };
  test("Task renders", () => {
    render(
      <Task task={task} toggleTaskCompleted={() => {}} deleteTask={() => {}} />
    );
  });
  test("Task displays proper task name", () => {
    const { container } = render(<Task key={task.id} task={task} />);
    const taskText = container.querySelector("p");
    expect(taskText.innerHTML).toBe("test task");
  });
});
