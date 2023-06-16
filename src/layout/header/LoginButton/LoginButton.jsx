import css from "./LoginButton.module.css";
import { Link } from "react-router-dom";
const LoginButton = () => {
  return (
    <button className={css.login_button}>
      <Link to={"/login"}> Войти </Link>{" "}
    </button>
  );
};
export default LoginButton;
