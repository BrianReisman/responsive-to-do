import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import {
  FormRoot,
  Checkbox,
  CheckboxLabel,
  TextInput,
  TextInputLabel,
} from "../Form.elements";

const Form = (props) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const taskObj = {
      id: uuid(),
      task: input,
      completed: false,
    };

    props.setTasks([...props.tasks, taskObj]);

    setInput("");
  };

  return (
    <FormRoot onSubmit={submitHandler}>
      <CheckboxLabel htmlFor="checkbox">
        <Checkbox type="checkbox" disabled id="checkbox" />
      </CheckboxLabel>
      <TextInputLabel htmlFor="task-text">
        <TextInput
          placeholder="Create a new item..."
          type="text"
          id="task-text"
          onChange={changeHandler}
          value={input}
        />
      </TextInputLabel>
    </FormRoot>
  );
};

export default Form;
