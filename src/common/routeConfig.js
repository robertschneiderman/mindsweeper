import App from './app';
// import Home from './Home';
import PageNotFound from './PageNotFound';
import gameRoute from '../pages/game/redux/route';

const routes = [{
  path: '/',
  component: App,
  childRoutes: [
    gameRoute,
    { path: '*', name: 'Page not found', component: PageNotFound },
  ],
}];

export default routes;