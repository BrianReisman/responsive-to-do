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

    if(input){

      const taskObj = {
        id: uuid(),
        task: input,
        completed: false,
      };
      
      props.setTasks([...props.tasks, taskObj]);
      
      setInput("");
    } else {
      return
    }
    };

  return (
    <FormRoot onSubmit={submitHandler}>
      <Checkbox type="checkbox" id="checkbox" disabled />
      <CheckboxLabel />
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
