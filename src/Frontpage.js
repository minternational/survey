import React from 'react';
import Header from './components/Header'
import Answer from './components/Answer'


class Frontpage extends React.Component {
  
  render() {
    return(
      <div>
        <Header />
        <Answer />
      </div>
    )
  }

}


export default Frontpage