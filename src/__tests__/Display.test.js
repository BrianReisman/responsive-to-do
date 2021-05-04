import Display from "../components/Display/Display";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

const mockTasks = [
  {
    id: 123,
    title: "test title",
    completed: false,
  },
  {
    id: 123,
    title: "test title",
    completed: false,
  },
  {
    id: 123,
    title: "test title",
    completed: false,
  },
];

test("number of tasks = 6", () => {
  const asdf = render(<Display tasks={mockTasks} activeFilter={"all"} />);
  console.log(asdf.debug())
  
  // const task = screen.getByText(/test title/i);
});
