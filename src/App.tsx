import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';
import { routes } from './config/routes';
import { IRoute } from './config/routes/route.interface';
import Loading from './components/common/Loading';

import './App.css';
import { Header } from './components/common/Header';

const App = () => (
  <Suspense fallback={Loading()}>
    <Header/>
    <Router>
      <Switch>
        {routes.map((route: IRoute, index: number) => (
          <Route
            key={index}
            exact={true}
            path={route.path}
            render={(props: RouteComponentProps) => (
              <Suspense fallback={Loading()}>
                <route.component {...props} routes={route.routes} />
              </Suspense>
            )}
          />
        ))}
      </Switch>
    </Router>
  </Suspense>
);
export default App;
