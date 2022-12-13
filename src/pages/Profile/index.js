import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../slices/user";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.user);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUser());
    }
  }, [status]);

  if (status === "succeeded") {
    return (
      <div>
        <p>{user.name}</p>
        <p>{user.lastname}</p>
        <p>{user.role}</p>
        <p>{user.status}</p>
        <p>{user.email}</p>
      </div>
    );
  } else if (status === "idle") {
    return <>Loading</>;
  } else if (error) {
    return <>Error Has Happened❌</>;
  }
};

export default Profile;
