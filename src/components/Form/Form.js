import React, { useState } from "react";
import {
  FormRoot,
  Checkbox,
  CheckboxLabel,
  TextInput,
  TextInputLabel,
} from "./Form.Elements.js";

const Form = (props) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`You created a task called: ${input}`);
    setInput("");
  };

  return (
    <FormRoot onSubmit={submitHandler}>
      <CheckboxLabel htmlFor="checkbox">
        <Checkbox type="checkbox" disabled id="checkbox" />
      </CheckboxLabel>
      <TextInputLabel htmlFor="task-text">
        <TextInput
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
