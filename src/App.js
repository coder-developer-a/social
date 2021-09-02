import Header from './components/Header';
import Amazingtxt from './components/Amazingtxt';
import Trending from './components/Trending';
import Highway from './components/Highway'; 
import Sports from './components/Sports';
import Footera from './components/Footera';
import Photographers from './components/Photographers';
import Signin from './components/Signin';
import Footerab from './components/Footerab';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className='container-fluid'>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/' exact>
            <Header />
            <Amazingtxt />
            <Trending />
            <Highway />
            <Sports />
            <Footerab />
          </Route>
          <Route path="/Photographers">
            <Header />
            <Photographers />
            <Footera />
          </Route>
          <Route path='/category-trending'>
            <Header />
            <Trending />
            <Footera />
          </Route>
          <Route path='/category-highway'>
            <Header />
            <Highway />
            <Footera />
          </Route>
          <Route path='/category-sports'>
            <Header />
            <Sports />
            <Footera />
          </Route>
          <Route path='/signin'>
            <Header />
            <Signin />
            <Footera />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
