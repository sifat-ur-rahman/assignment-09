import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Layouts/Main';
import Quiz from './Components/Quiz/Quiz';
import Chirt from './Components/Chirt/Chirt';
import About from './Components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/quiz',
          element: <Quiz></Quiz>
        },
        {
          path: '/chirt',
          element: <Chirt></Chirt>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
