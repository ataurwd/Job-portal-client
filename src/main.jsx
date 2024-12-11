import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Route from "./routes/Route";
import AuthContext from "./context/AuthContext";
import "react-datepicker/dist/react-datepicker.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <Route />
    </AuthContext>
  </StrictMode>
);
