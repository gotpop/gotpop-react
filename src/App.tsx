import "./styles/app.css";

import { Route, Routes } from "react-router-dom";

import { About } from "pages/About";
import { Home } from "pages/Home";
import LayoutStandard from "@layouts/LayoutStandard"
import { Store } from "pages/Shop";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <LayoutStandard>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </LayoutStandard>
  );
}

export default App;
