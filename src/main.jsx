import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import { NoteProvier } from "./context/UseNote.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NoteProvier>
      <App />
    </NoteProvier>
  </React.StrictMode>
);
