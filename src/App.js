import Display from "./components/Display";
import ControlledForm from "./components/ControlledForm";
import { useState } from "react";
import Score from "./components/Score";
import "./index.css"

function App() {

  //create our state to hold the jservice data
  const [question, setQuestion] = useState([{}])
  //question is passed down to display as a prop

  return (
    <div className="App">
      <h1 className="topHeading">Welcome To Jeapordy!</h1>
      <Score/>
      <ControlledForm setQuestion={setQuestion}/>
      <Display question={question}/>
    </div>
  );
}

export default App;
