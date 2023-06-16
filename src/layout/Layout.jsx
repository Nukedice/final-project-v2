import Header from "./header/header";
import Footer from "./footer/footer";
import Main from "../pages/main/main";
const Layout = ({children}) => {
    return ( 
        <>
        <Header />
        <Main></Main>
            <main>{children}</main>
        <Footer />
        </>
     );
}
 
export default Layout;