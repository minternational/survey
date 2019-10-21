import React from 'react';
import './App.css';
import Frontpage from './Frontpage'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      consoleLog: ''
    }
  }

  handleClick() {
    console.log('Link is clicked!')
    // document.getElementsByClassName('App-Header')
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Frontpage />
              <button id="button" onClick={this.handleClick}>Los geht's</button>
          </header>
        </div>
    );
  }
}


export default App;
