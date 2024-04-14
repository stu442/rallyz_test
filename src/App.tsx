import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import { RecoilRoot } from 'recoil';
import Detail from './pages/Detail/DetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/search/:keyword',
    element: <Home />
  },
  {
    path: '/product/:id',
    element: <Detail />
  }
]);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
