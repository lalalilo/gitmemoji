import React from "react";
import "csshake";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EasyQuiz from "./EasyQuiz";
import HardQuiz from "./HardQuiz";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/easy">
          <EasyQuiz />
        </Route>
        <Route path="/hard">
          <HardQuiz />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
