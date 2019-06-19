import React from "react";

import { Container, Row, Col } from "./Components/Grid";
import Nav from "./Components/Nav"
import CardContainer from "./Components/CardContainer";

function App() {
  return (
    <>
      <Nav />
      <Container>
        <CardContainer />
      </Container>
    </>
  );
}

export default App;
