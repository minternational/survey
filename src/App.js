import React from 'react';
import './App.css';
import Frontpage from './Frontpage'
import Question from './components/Question'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showComponent: false,
    }
    this.handeClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState({
      showComponent: true })
    // console.log("The button was clicked!")
    // document.getElementById('page')
    // document.getElementsByClassName('App-Header')
  }    

  
  render() {
    return (
      <Router>
        <div className="App">
          <Frontpage />
            <Link to={'/components/Question'} className="nav-link"> Los geht's </Link>
          <Switch>
            <Route path='/components/Question' component={Question} />
          </Switch>
        </div>
      </Router>        
    );
  }
}


export default App;



// <header className="App-header">
//     {this.state.showComponent ? <Question /> : <Frontpage />}
//     <button id="button" onClick={this.handleClick}> {this.state.showComponent ? 'Weiter' : "Los geht's"}
//     </button>
//   </div>
// </header>