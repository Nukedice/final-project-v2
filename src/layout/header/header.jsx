import { useState } from "react";
import css from "./header.module.css";
import logo from "./assets/header-logo.png";
import logo2 from "../Footer/assets/footer-logo.png";
import MenuIcon from "./assets/MenuIcon/MenuIcon";
import CloseIcon from "./assets/CloseIcon/CloseIcon.jsx";
import LoginButton from "./LoginButton/LoginButton";
import Navigation from "./Navigation/navigation";
import RouteLink from "../../ui/RouteLink/RouteLink";
const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className={open ? css.mobile_header : css.header}>
      <RouteLink path="/">
        <img src={open ? logo2 : logo} alt="logo" />
      </RouteLink>
      <nav className={css.navigation}>
        <RouteLink path="/" className={css.nav_item}>
          Главная
        </RouteLink>
        <RouteLink path="/pricing" className={css.nav_item}>
          Тарифы
        </RouteLink>
        <RouteLink path="/faq" className={css.nav_item}>
          FAQ
        </RouteLink>
      </nav>
      <div className={css.profile}>
        <div className={css.box}>
          <p className={css.box_item}>
            Использовано компаний <span className={css.box_number}>34</span>
          </p>
          <p className={css.box_item}>
            Лимит по компаниям{" "}
            <span className={css.box_number} style={{ color: "#8AC540" }}>
              100
            </span>
          </p>
        </div>
        <div className={css.login}>
          <RouteLink path="/register" className={css.register}>
            Зарегистрироваться
          </RouteLink>
          <div className={css.slash}></div>
          <LoginButton />
        </div>
      </div>
      <div className={css.mobile_nav}>
        <button type="button" onClick={toggleMenu}>
          {!open ? (
            <MenuIcon open={open} className={css.close} />
          ) : (
            <CloseIcon
              open={open}
              className={css.close}
              style={{ background: "#029491" }}
            />
          )}
        </button>
      </div>

      <Navigation open={open} />
    </header>
  );
};
export default Header;
