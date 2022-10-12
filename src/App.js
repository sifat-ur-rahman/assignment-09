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
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Home></Home>
        },
        {
          path: '/categorie/:quizId',
          loader: async ({ params }) => {
            // console.log(params.quizId);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/chirt',
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Chirt></Chirt>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '*',
          element: <h2>no page</h2>
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
