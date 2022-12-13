import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../slices/task";
import "./index.scss";

const NewTask = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.tasks.newTask);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [statuss, setStatuss] = useState("todo");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const task = { title, description, status: statuss };
      dispatch(createTask(task));
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
              onChange={(e) => setStatuss(e.target.value)}
            />
            <label htmlFor="todo">todo</label>
          </div>
          <div>
            <input
              type="radio"
              id="in-progress"
              name="status"
              value="in progress"
              onChange={(e) => setStatuss(e.target.value)}
            />
            <label htmlFor="in-progress">in progress</label>
          </div>
          <div>
            <input
              type="radio"
              id="completed"
              name="status"
              value="completed"
              onChange={(e) => setStatuss(e.target.value)}
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
