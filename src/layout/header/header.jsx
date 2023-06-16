import { useState } from 'react';
import css from './header.module.css'
import logo from './assets/header-logo.png'
import logo2 from '../footer/assets/footer-logo.png'
import { Link } from 'react-router-dom'
import MenuIcon from './assets/MenuIcon/MenuIcon';
import CloseIcon from './assets/CloseIcon/CloseIcon.jsx';
import LoginButton from './LoginButton/LoginButton'
import Navigation from './navigation/navigation';
const Header = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
    }

    return <header className={open ? css.mobile_header : css.header}>
        <Link to = {'/'} ><img src={open? logo2 : logo} alt="logo" /> </Link>
        <nav className={css.navigation}>
        <Link to = {'/'} className={css.nav_item}>Главная</Link>
            <a href="#" className={css.nav_item}>Тарифы</a>
            <a href="#" className={css.nav_item}>FAQ</a>
        </nav>
        <div className={css.profile}>
            <div className={css.box}>
                <p className={css.box_item}>Использовано компаний <span className={css.box_number}>34</span></p>
                <p className={css.box_item}>Лимит по компаниям <span className={css.box_number} style={{ color: '#8AC540' }}>100</span></p>
            </div>
            <div className={css.login}>
                <a href='#' className={css.register}>Зарегистрироваться</a>
                <div className={css.slash}></div>
                <LoginButton />
            </div>
        </div>
        <div className={css.mobile_nav}>
            <button type="button" onClick={toggleMenu}>
                {!open? <MenuIcon open={open} className={css.close} />:
                <CloseIcon open={open} className={css.close} style={{ background: '#029491' }}/>}
            </button>
        </div>

        <Navigation open={open} />
    </header>
}
export default Header;