import css from './form.module.css'
import lock from './assets/padlock.png'
import google from './assets/google.png'
import facebook from './assets/facebook.png'
import yandex from './assets/yandex.png'
import Button from '../../ui/Button/Button'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Form = () => {
const url = 'https://gateway.scan-interfax.ru/swagger/docs/v1';
/*
const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post about Timeweb Cloud."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );*/
const [post, setPost] = useState(null);
useEffect (() => {
    axios.post (url, {
        
    })
})
const [active, setActive] = useState(false);
const makeActive = () => {
    setActive (!active);
}
    return (
        <form className={css.account_form} onSubmit={(e) => e.preventDefault()}>
            <img src={lock} className={css.lock} /> 
            <div className={css.button_block}>
                <button className={css.button} style={!active? {color:'#029491', borderColor: '#029491'}:{color:'#C7C7C7'}} onClick={active? makeActive:console.log(1)} >Войти</button>
                <button className={css.button} style={active? {color:'#029491', borderColor: '#029491'}:{color:'#C7C7C7'}} onClick={!active? makeActive:console.log(2)} >Зарегистрироваться</button>
            </div>
            <label for="login" className={css.labels}>Логин или номер телефона:</label>
            <input id="login" type="text" name="login" className={css.inputs}></input> 
            <label for="password" className={css.labels}>Пароль:</label> 
            <input id="password" type='password' name="password" className={css.inputs}></input> 
            <Button text={!active?'Войти':'Зарегистрироваться'}></Button>
            <a href="#" className={css.reset}>Восстановить пароль</a>
            <p className={css.labels}>Войти через:</p>
            <div className={css.socials}>
                <a href="https://www.google.ru/" target='_blank'><img src={google} alt="" /> </a> 
                <a href="https://www.facebook.com/" target='_blank'><img src={facebook} alt="Росфинмониторинг включил корпорацию Meta (признана в России экстремистской и запрещена) в перечень террористов и экстремистов." /> </a>
                <a href="https://www.yandex.com/" target='_blank'><img src={yandex} alt="Найдётся всё!"/></a>
            </div>
        </form>
    )
}
export default Form;