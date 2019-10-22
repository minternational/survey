import React from 'react';
import './App.css';
import Frontpage from './Frontpage'
import Question from './components/Question'


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
        <div className="App">
          <header className="App-header">
            <div id="page">
              {this.state.showComponent ? <Question /> : <Frontpage />}
              <button id="button" onClick={this.handleClick}> {this.state.showComponent ? 'Weiter' : "Los geht's"}
              </button>
            </div>
          </header>
        </div>
    );
  }
}


export default App;
