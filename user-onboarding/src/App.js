import React from "react";
import UserForm from "./Form";
import styled from "styled-components";
import img from "./assets/background.jpg";
import "./App.css";

const AppDiv = styled.div`
  background-image: url(${img});
  background-size: 100%;
  height: 100vh;
`;

function App() {
  return (
    <AppDiv className="App">
      <UserForm />
    </AppDiv>
  );
}

export default App;
