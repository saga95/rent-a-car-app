import "./App.css";
import Home from "./Pages/App/Home/Home";
import Admin from "./Pages/App/Admin/Admin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUp, SignIn } from "./Pages/Auth";
import { Header } from "./common";
function App() {
  return (
    <Router>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route exact path="/signup">
          <Header />
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <Header />
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
