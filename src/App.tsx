import "./styles/app.css";

import { Route, Routes } from "react-router-dom";

import { About } from "@pages/About";
import { Home } from "@pages/Home";
import LayoutStandard from "@layouts/LayoutStandard";
import { Page404 } from "@pages/Page404";
import { Shop } from "@pages/Shop";
import { ShoppingCartProvider } from "@context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <LayoutStandard>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route element={<Page404 />} />
        </Routes>
      </LayoutStandard>
    </ShoppingCartProvider>
  );
}

export default App;
