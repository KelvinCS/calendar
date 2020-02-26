import React from "react";
import styled from "styled-components";
import theme from "./global/theme";
import { ThemeProvider } from "styled-components";
import Calendar from "./containers/Calendar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => (
  <Container>
    <ThemeProvider theme={theme}>
      <Calendar />
    </ThemeProvider>
  </Container>
);

export default App;
