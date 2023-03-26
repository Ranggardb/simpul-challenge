import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PopupMenu from './pages/PopupMenu';
import { Fragment } from 'react';

// page routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

function App() {
  return (
    <Fragment>
      <div className="bg-slate-100 h-screen w-screen">
        <RouterProvider router={router} />
      </div>
      <PopupMenu />
    </Fragment>
  );
}

export default App;
