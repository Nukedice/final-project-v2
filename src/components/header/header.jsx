import { useState } from 'react';
import css from './header.module.css'
import logo from '../UI/header-logo.png'
import logo2 from './../UI/footer-logo.png'

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
    }
    const Button = (props) => {
        return <button className={css.login_button}>Войти</button>}
    const List = ({ open }) => {
        return (
            <><ul className={open ? css.show : css.hide}>
                <li><a href="#">Главная</a></li>
                <li><a href="#">Тарифы</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href='#' className={css.register}>Зарегистрироваться</a></li>
                <li><Button /></li>
            </ul></>
        )
    }
    const MenuIcon = ({ open }) => {
        return (
            <>
                <svg className={open ? css.close : css.menu} fill="#029491" viewBox="0 0 448 512" width="30" title="bars">
                    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
                </svg></>
        )
    }

    const CloseIcon = ({ open }) => {
        return (
            <svg className={open ? css.menu : css.close} style={{ background: '#029491' }} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3.53613" width="30" height="5" transform="rotate(45 3.53613 0)" fill="#fff"/>
            <rect x="24.7485" y="3.53564" width="30" height="5" transform="rotate(135 24.7485 3.53564)" fill="#fff"/>
            </svg>
        )
    }

    return <header className={open ? css.mobile_header : css.header}>
        <img src={open? logo2 : logo} alt="logo" />
        <nav className={css.navigation}>
            <a href="#" className={css.nav_item}>Главная</a>
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
                <Button />
            </div>
        </div>
        <div className={css.mobile_nav}>
            <button type="button" onClick={toggleMenu}>
                <MenuIcon open={open} />
                <CloseIcon open={open} />
            </button>
        </div>

        <List open={open} />
    </header>
}
export default Header;