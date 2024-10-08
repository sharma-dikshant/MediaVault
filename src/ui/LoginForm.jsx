import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { useNavigate } from "react-router";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  function onSubmit(data) {
    dispatch(setUser({ email: data.email, name: data.name }));
    // console.log(data);
    reset();
    navigate("/");
  }

  return (
    <div className={styles["login-form-container"]}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles["login-form"]}>
        <label>Username:</label>
        <input
          type="text"
          className={styles["login-input"]}
          {...register("name", { required: true, minLength: 3 })}
          placeholder="Enter your username"
        />
        {(errors.name?.type === "required" ||
          errors.name?.type === "minLength") && (
          <p role="alert">min 3 character name is required</p>
        )}
        <label>Email:</label>
        <input
          type="email"
          className={styles["login-input"]}
          {...register("email", { required: true })}
          placeholder="Enter your email"
        />
        {errors.email?.type === "required" && (
          <p role="alert">Email is required</p>
        )}
        <button className={styles["login-button"]}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
