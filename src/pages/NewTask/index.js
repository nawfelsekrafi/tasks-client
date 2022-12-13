import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./index.scss";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");

  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log({ title, description, status });
      //   await createTask({ title, description, status });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h3>add Task</h3>
      <form onSubmit={(e) => submit(e)}>
        <TextField
          id="outlined-basic"
          label="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          variant="outlined"
          required
        />
        <TextField
          id="outlined-basic"
          label="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          variant="outlined"
          required
        />
        <div>
          <div>
            <input
              type="radio"
              id="todo"
              name="status"
              value="todo"
              onChange={(e) => setStatus(e.target.value)}
            />
            <label htmlFor="todo">todo</label>
          </div>
          <div>
            <input
              type="radio"
              id="in-progress"
              name="status"
              value="in progress"
              onChange={(e) => setStatus(e.target.value)}
            />
            <label htmlFor="in-progress">in progress</label>
          </div>
          <div>
            <input
              type="radio"
              id="completed"
              name="status"
              value="completed"
              onChange={(e) => setStatus(e.target.value)}
            />
            <label htmlFor="completed">completed</label>
          </div>
        </div>
        <Button variant="contained" type="submit">
          add task
        </Button>
      </form>
    </div>
  );
};

export default NewTask;
