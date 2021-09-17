/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "../routes/MainRoutes";

function App() {
  return (
    <Router>
      <MainRoutes></MainRoutes>
    </Router>
  );
}

export default App;
