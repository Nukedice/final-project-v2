import css from './navigation.module.css'
import LoginButton from '../LoginButton/LoginButton'
import RouteLink from '../../../ui/RouteLink/RouteLink'
const Navigation = ({ open }) => {
    return (<nav>
        <ul className={open ? css.show : css.hide}>
            <li><RouteLink path = '/'>Главная</RouteLink></li>
            <li><RouteLink path='/pricing'>Тарифы</RouteLink></li>
            <li><RouteLink path='/faq'>FAQ</RouteLink></li>
            <li><RouteLink path='/register' className={css.register}>Зарегистрироваться</RouteLink></li>
            <li><LoginButton /></li>
        </ul>
        </nav>
    )
}
export default Navigation