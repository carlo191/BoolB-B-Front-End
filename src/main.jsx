import { createRoot } from "react-dom/client";

// Components
import App from "./App.jsx";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Custom CSS
import "./assets/index.css";

createRoot(document.getElementById("root")).render(<App />);
