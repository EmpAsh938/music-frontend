import ReactDOM from "react-dom/client";

import App from "./App";
import keycloak from "./keycloak";
import AppProvider from "./context";
import "bootstrap/dist/css/bootstrap.css";
import { ReactKeycloakProvider } from "@react-keycloak/web";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ReactKeycloakProvider authClient={keycloak}>
    <AppProvider>
      <App />
    </AppProvider>
  </ReactKeycloakProvider>
);
