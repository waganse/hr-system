import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthProvider } from './view/Auth';
import { Landing } from './view/pages/Landing';
import { SignIn } from './view/pages/auth/SignIn';
import { Verification } from './view/pages/auth/Verification';
import { Employee } from './view/pages/Employee';
import { Payroll } from './view/pages/Payroll';
import { Report } from './view/pages/Report';
import { Master } from './view/pages/Master';
import { Account } from './view/pages/Account';
import { ResetPassword } from './view/pages/auth/ResetPassword';

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/employee" component={Employee} />
        <Route path="/payroll" component={Payroll} />
        <Route path="/report" component={Report} />
        <Route path="/master" component={Master} />
        <Route path="/account" component={Account} />
        <Route path="/auth/signin" component={SignIn} />
        <Route path="/auth/verification" component={Verification} />
        <Route path="/auth/reset" component={ResetPassword} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
