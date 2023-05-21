import React from "react";
import "./App.css";
import Container from "./components/Container";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <div className="header">
        <h1>Coding Contest Calender</h1>
      </div>
      <Container />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .header {
    text-align: center;
    margin: 2%;
    h1 {
      font-size: 3rem;
      color: #fff8dc;
    }
  }
`;

export default App;
