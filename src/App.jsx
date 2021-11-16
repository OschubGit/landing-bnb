import Navbar from "./components/navbar/Navbar";
import Hero from "./components/views/Hero";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/app/theme";
import "./app.css";
import CitieSlides from "./components/views/CitieSlides";
import PlanTravel from "./components/views/PlanTravel";
import Santorini from "./components/views/Santorini";
import Room from "./components/views/Room";
import PageFooter from "./components/views/PageFooter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Hero />
        <CitieSlides />
        <PlanTravel />
        <Santorini />
        <Room />
        <PageFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
