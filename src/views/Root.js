import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';
import Notes from './Notes';
import Articles from './Articles';
import Twitters from './Twitters';
import DetailsPage from './DetailsPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route
            exact
            path={routes.home}
            render={() => <Redirect to="/notes" />}
          />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.note} component={DetailsPage} />
          <Route exact path={routes.twitters} component={Twitters} />
          <Route path={routes.twitter} component={DetailsPage} />
          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.article} component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
