import Header from "./header/header";
import Footer from "./footer/footer";
import Result from "../pages/result/result";
import Main from "../pages/main/main";
import Login from "../pages/login/login";
import Search from "../pages/search/search";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Result></Result>
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
