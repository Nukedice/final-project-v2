import css from "./form.module.css";
import lock from "./assets/padlock.png";
import google from "./assets/google.png";
import facebook from "./assets/facebook.png";
import yandex from "./assets/yandex.png";
import Button from "../../ui/Button/Button";
import React, { useState, useEffect } from "react";
import RouteLink from "../../ui/RouteLink/RouteLink";
import Input from "../../ui/Input/Input";
const Form = () => {
  const [formState, setFormState] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [tokenData, setTokenData] = useState("");
  const [activeBtn, setActiveBtn] = useState(false);
  const makelogin = () => {
    setActiveBtn(!activeBtn);
  };
  const loginHandler = (login) => {
    setFormState({ ...formState, login: login });
  };
  const passwordHandler = (password) => {
    setFormState({ ...formState, password: password });
  };
  const authSubmit = (authObj) => {
    const resBody = JSON.stringify(authObj);
    const res = fetch(
        `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_LOGIN_ENDPOINT}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: resBody,
      }
    );
    res
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setErrorMsg(data.message);
        }
        if (data.accessToken) {
            console.log(data.accessToken)
          setTokenData(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(tokenData));
  }, [tokenData]);

 //useEffect(() => {
   //console.log(errorMsg);
 //}, [errorMsg]);
  return (
    <form
      className={css.account_form}
      onSubmit={(e) => {
        e.preventDefault();
        authSubmit(formState);
      }}
    >
      <img src={lock} className={css.lock} />
      <div className={css.button_block}>
        <button
          className={css.button}
          style={
            !activeBtn
              ? { color: "#029491", borderColor: "#029491" }
              : { color: "#C7C7C7" }
          }
          onClick={activeBtn ? makelogin : console.log(1)}
        >
          Войти
        </button>
        <button
          className={css.button}
          style={
            activeBtn
              ? { color: "#029491", borderColor: "#029491" }
              : { color: "#C7C7C7" }
          }
          onClick={!activeBtn ? makelogin : console.log(2)}
        >
          Зарегистрироваться
        </button>
      </div>
      <Input
        text="Логин или номер телефона:"
        type="login"
        purpose="login"
        handler={loginHandler}
        error={errorMsg}
      />
      <Input
        text="Пароль:"
        type="password"
        purpose="password"
        handler={passwordHandler}
        error={errorMsg}
      />
      <Button text={!activeBtn ? "Войти" : "Зарегистрироваться"}></Button>
      <RouteLink path="/register" className={css.reset}>
        Восстановить пароль
      </RouteLink>
      <p>Войти через:</p>
      <div className={css.socials}>
        <RouteLink path="https://www.google.ru/" target="_blank">
          <img src={google} alt="" />{" "}
        </RouteLink>
        <RouteLink path="https://www.facebook.com/" target="_blank">
          <img
            src={facebook}
            alt="Росфинмониторинг включил корпорацию Meta (признана в России экстремистской и запрещена) в перечень террористов и экстремистов."
          />{" "}
        </RouteLink>
        <RouteLink path="https://www.yandex.com/" target="_blank">
          <img src={yandex} alt="Найдётся всё!" />
        </RouteLink>
      </div>
    </form>
  );
};
export default Form;
