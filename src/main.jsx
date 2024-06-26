import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModecontextProvider } from "./pages/Modecontext.jsx";

//import Modecontext from "./pages/Modecontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModecontextProvider>
      <App />
    </ModecontextProvider>
  </React.StrictMode>
);
