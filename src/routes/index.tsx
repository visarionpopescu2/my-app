import Dashboard from 'pages/Dashboard/Dashboard';
import Articles from 'pages/Articles/Articles';
import Article from 'pages/Article/Article';
import NotFound from 'pages/NotFound/NotFound';

export enum ROUTES {
  Dashboard = '/',
  Articles = '/articles'
}

const routes = () => [
  {
    path: ROUTES.Dashboard,
    element: <Dashboard />
  },
  {
    path: ROUTES.Articles,
    element: <Articles />,
  },
  {
    path: ROUTES.Articles + "/:id",
    element: <Article />,
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
