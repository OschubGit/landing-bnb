import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/app/theme";
import "./App.css";
import Home from "./containers/Home";
import TravelDetail from "./components/views/TravelDetail";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/travel-city/:name/:slug" children={<TravelDetail />} />
          <Route path="/travel-city/:name" children={<TravelDetail />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
