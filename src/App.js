import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import LoginPage from './components/login_page/login_page'
function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/login' element={<LoginPage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
