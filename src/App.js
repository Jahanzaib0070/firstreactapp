import React from 'react';
import "./App.css";

function App() {

  let currDate = new Date();
  let hour = currDate.getHours();
  let greeting = "";

  const stylecss = {};
  if (hour>=1 && hour<12){
    greeting = "Good Morning!";
    stylecss.color = 'Green';
  }
  else if(hour>=12 && hour <16){
    greeting = "Good Afternoon!";
    stylecss.color = 'rgb(187,187,36)';
  }
  else{
    greeting = "Good Night!";
    stylecss.color = 'Blue';
  }
  

  return (
    <>
      <div>
        <h1>Hello Sir, <span style={stylecss}> {greeting} </span></h1>
      </div>
    </>
  );
}

export default App;
