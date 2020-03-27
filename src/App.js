import React from 'react';
import './App.css';
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <br/>
      <br/>
      <br/>
      <Input 
        label="Enter the size of your checkerboard."
        placeholder="8"
        onSubmit=""
      />

    </div>
  );
}

export default App;
