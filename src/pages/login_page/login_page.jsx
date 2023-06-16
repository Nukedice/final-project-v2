import css from './login_page.module.css'
import people from './/../UI/Characters.png'
import AuthForm from '../auth_form/auth_form'
 const LoginPage = () => {
    return (
        <div className={css.loginPage}>
            <h1 className={css.header}>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
            <img src={people} alt="key" className={css.image} />
            <div className={css.container}><AuthForm /></div>
        </div>
    )
}
export default LoginPage;