import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useProductContext } from "./ProductContext";
import "../css/form.css";

function LoginForm({ show = false }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, setLogin } = useProductContext();

  const onSubmit = (data) => {
    setLogin(false);
  };
  const onClick = (evt) => {
    setLogin(false);
  };

  useEffect(() => {
    setLogin(show);
  }, []);

  return (
    <div className={`login ${login && "show"}`}>
      <div className="form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            {...register("username", { required: true })}
            className={errors.username && "error"}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className={errors.password && "error"}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
      <div className="backdrop" onClick={onClick}></div>
    </div>
  );
}

export default LoginForm;
