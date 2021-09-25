import '../styles/App.css';
import Header from './Header';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    // <CreateLink />
    // <LinkList />
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route
            exact
            path="/create"
            component={CreateLink}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
