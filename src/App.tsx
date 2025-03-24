import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import "./css/App.css";

function App() {
  return;
  <BrowserRouter>
    <Header />;
    <div>
      <Route path="/">
        <Home></Home>
      </Route>
      <Route path="/">
        <Card></Card>
      </Route>
    </div>
  </BrowserRouter>;
}

export default App;
