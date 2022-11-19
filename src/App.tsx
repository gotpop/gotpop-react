import "./styles/app.css";

import LayoutStandard from "./components/layouts/LayoutStandard"
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <LayoutStandard>
      <div className="App">
        <h1>Hi</h1>
      </div>
    </LayoutStandard>
  );
}

export default App;
