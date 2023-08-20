import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./RoutesComponents/Home";
import Menu from "./RoutesComponents/Menu";
import Cart from "./RoutesComponents/Cart";
import Payment from "./RoutesComponents/Payment";
import Confirmation from "./RoutesComponents/Confirmation";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
