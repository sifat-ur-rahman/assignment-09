
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Layouts/Main';
import Quiz from './Components/Quiz/Quiz';
import Chirt from './Components/Chirt/Chirt';

import Blog from './Components/About/Blog';
import Page from './Components/blank/Page';

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
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <Page></Page>
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
