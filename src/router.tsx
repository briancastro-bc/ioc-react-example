import { createBrowserRouter, RouteObject, } from 'react-router-dom';

import Root from './Root';
import { lazy } from 'react';

const routes: Array<RouteObject> = [
  {
    path: '',
    element: <Root/>,
    children: [
      {
        path: '',
        Component: lazy(
          () => import('./apps/Home/Home')
        ),
      },
      {
        path: '*',
        element: <p>No se ha encontrado</p>
      },
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;