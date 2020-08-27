import React from 'react';
import { PageLayout } from './view/Layout';
import { Employee } from './view/pages/Employee';
import { Landing } from './view/pages/Landing';
import { Setting } from './view/pages/Setting';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <PageLayout>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/employee" component={Employee} />
        <Route path="/setting" component={Setting} />
      </Switch>
    </PageLayout>
  );
}

const theme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: 'red',
  },
  sectionBody: {
    ...AmplifyTheme.sectionBody,
    padding: '30px'
  },
  input: {
    ...AmplifyTheme.input,
    marginBottom: '20px'
  }
}

export default withAuthenticator(App, false, [], null, theme);
