import React from 'react';
import './App.css';
import Frontpage from './Frontpage'
import Question from './components/Question'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {

  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact >
              <Frontpage />
              <Link to={'/Question'} className="link"><button id="button">Los geht's</button></Link>
            </Route>
            <Route path='/Question' component={Question} />
          </Switch>
        </div>
      </Router>        
  );
}


export default App;