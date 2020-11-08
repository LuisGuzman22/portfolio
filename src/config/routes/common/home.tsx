import { lazy } from 'react';
import { IRoute } from '../route.interface';

const Home = lazy(() => import('./../../../components/Home'));
const Blog = lazy(() => import('./../../../components/Blog'));

export const routes: IRoute[] = [
  {
    path: '/',
    component: Home,
  },
  {
      path: '/blog/:path', 
      component: Blog
  }
];
