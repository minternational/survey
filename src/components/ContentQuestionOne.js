import React from 'react';
import './App.css';


function ContentQuestionOne() {
  return (
    <div className="ContentQuestionOne">
      <h2>Was würdest Du dir in einer App, die sich um CBD dreht am meisten wünschen als Kunde?</h2>
      <p><input type="checkbox" />Sofortige Anzeige einer Map
      <br />
      <input type="checkbox" />Ich will auf die Startseite
      <br />
      <input type="checkbox" />Hauptsache alles ist kunterbunt
      <br />
      <input type="checkbox" />Nichts
      <br />
      <input type="checkbox" />Alles</p>
    </div>
  );
}


export default ContentQuestionOne;