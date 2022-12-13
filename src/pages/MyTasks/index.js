import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../slices/task";
import "./index.scss";

const MyTasks = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.tasks.myTasks);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTasks());
    }
  }, [status]);

  if (status === "succeeded") {
    return (
      <div>
        <h3>My Tasks</h3>
        <div className="tasks-container">
          {data.map((e) => {
            return (
              <div
                key={e._id}
                className={
                  e.status === "in progress"
                    ? `in_progress task-container`
                    : `${e.status} task-container`
                }
              >
                <h5>Title : {e.title}</h5>
                <p>Status : {e.status}</p>
                <p>description: {e.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (status === "idle") {
    return <>Loading</>;
  } else if (error) {
    return <>Error Has Happened❌</>;
  }
};

export default MyTasks;
