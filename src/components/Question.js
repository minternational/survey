import React from 'react'


class Question extends React.Component {
  constructor() {
    super()
    this.state = {
      arr: []
    }
  }

  render() {
    return(
      <div>
        
        Was würdest Du Dir am meisten Wünschen?
        <hr />
        <br />
        <input type="checkbox" />Geiles Weed
        <br />
        <input type="checkbox" />Noch geileres Weed
        <br />
        <input type="checkbox" />Koks
        <br />
        <input type="checkbox" />Nutten
        <br />
        <input type="checkbox" />'ne Mille
        <br />
        <hr />
        <br />

      </div>
    )
  }

}


export default Question