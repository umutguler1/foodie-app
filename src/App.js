import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./Layout/Header";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Header />

      <div className="grid gap-y-8 p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
