import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ContentQuestionOne from './ContentQuestionOne'
// import QuestionTwo from './QuestionTwo'


function Question() {

  return(
    <Router>
      <div className="Question">
        <ContentQuestionOne />
        <button id="button">Nächste Frage</button>
      </div>
    </Router> 
  )
}



export default Question;


// <Link to={'/QuestionTwo'} className="link"><button id="button">Nächste Frage</button></Link>
//             </Route>
//             <Route path='/QuestionTwo' component={QuestionTwo} />
//           </Switch>