import css from './navigation.module.css'
import LoginButton from '../LoginButton/LoginButton'
import { Link } from 'react-router-dom'
const Navigation = ({ open }) => {
    return (<nav>
        <ul className={open ? css.show : css.hide}>
            <li><Link to = {'/'}>Главная</Link></li>
            <li><a href="#">Тарифы</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href='#' className={css.register}>Зарегистрироваться</a></li>
            <li><LoginButton /></li>
        </ul>
        </nav>
    )
}
export default Navigation