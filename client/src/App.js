import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  return (
    <Router>
      <Container maxwidth='xl'>
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/posts" />} />
          <Route exact path="/posts" component={Home} />
          <Route exact path="/posts/search" component={Home} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;