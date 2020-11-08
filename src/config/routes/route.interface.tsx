import { RouteProps } from 'react-router-dom';

export interface IRoute extends RouteProps {
  component: React.LazyExoticComponent<(params: any) => JSX.Element>;
  routes?: IRoute[];
}
