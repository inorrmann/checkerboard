import React from 'react';
import './App.css';
import Square from "./components/Square";
import Input from "./components/Input";
import Container from "react-bootstrap/Container";

function App() {





  return (
    <div className="App">
      <br/>
      <br/>
      <br/>
      <Input 
        label="Enter the size of your checkerboard:"
        placeholder="8"
        onSubmit=""
      />
      <Container>

        <Square color="black"/>
        <Square color="white" />
      </Container>
    </div>
  );
}

export default App;
