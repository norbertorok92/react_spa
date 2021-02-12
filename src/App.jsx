import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UsersPage } from "./pages/UsersPage/UsersPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { CreateUserPage } from "./pages/CreateUserPage/CreateUserPage";
import { EditUserPage } from "./pages/EditUserPage/EditUserPage";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={UsersPage} exact />
      <Route path="/profile/:userId" component={ProfilePage} />
      <Route path="/edit/:userId" component={EditUserPage} />
      <Route path="/create" component={CreateUserPage} />
    </Switch>
  </Router>
);

export default App;
