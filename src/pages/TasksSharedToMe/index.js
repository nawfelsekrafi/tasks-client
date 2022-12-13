import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksSharedToMe } from "../../slices/task";

const TasksSharedToMe = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(
    (state) => state.tasks.tasksSharedToMe
  );
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTasksSharedToMe());
    }
  }, [status]);

  if (status === "succeeded") {
    return (
      <div>
        <h3>Tasks Shared To Me</h3>
        {data.map((e) => {
          return (
            <div key={e._id}>
              <h5>Title : {e.title}</h5>
              <p>Status : {e.status}</p>
              <p>description: {e.description}</p>
            </div>
          );
        })}
      </div>
    );
  } else if (status === "idle") {
    return <>Loading</>;
  } else if (error) {
    return <>Error Has Happened❌</>;
  }
};

export default TasksSharedToMe;
