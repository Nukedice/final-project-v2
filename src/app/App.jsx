import './global/global.module.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/main';
import Login from '../pages/Login/login';
import Layout from '../layout/Layout'
import Search from '../pages/Search/search';
import Result from '../pages/Result/result';
import NotFound from '../pages/NotFound/NotFound';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
    },
    {
      path:'/login',
      element:<Login/>,
    },
    {
      path:'/search',
      element:<Search/>,
    },
    {
      path:'/result',
      element:<Result/>,
    },
    {
      path:'*',
      element: <NotFound/>,
    },
  ])
  return (
    <Layout>
      <RouterProvider router={router}/>
    </Layout>
  );
}
export default App;