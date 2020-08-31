import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthProvider } from './view/Auth';
import { Landing } from './view/pages/Landing';
import { SignIn } from './view/pages/auth/SignIn';
import { Employee } from './view/pages/Employee';
import { Report } from './view/pages/Report';
import { Setting } from './view/pages/Setting';

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/employee" component={Employee} />
        <Route path="/report" component={Report} />
        <Route path="/setting" component={Setting} />
        <Route path="/auth/signin" component={SignIn} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
