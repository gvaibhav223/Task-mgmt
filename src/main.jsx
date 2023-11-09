import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Sass/main.css";
import ContextState from "./Context/StateContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <React.StrictMode>
    </React.StrictMode> */}
    <ContextState>
      <App />
    </ContextState>
  </>
);
