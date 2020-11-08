import { lazy } from 'react';
import { IRoute } from '../route.interface';

const NotFound = lazy(() => import('./../../../components/NotFount'));

export const routes: IRoute[] = [
  {
    path: '*',
    component: NotFound,
  },
];
