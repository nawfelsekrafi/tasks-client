import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { AuthProvider } from "./contexts/JWTAuthContext";
import routes, { renderRoutes } from "./routes";

function App() {

  return (
        <BrowserRouter>
          <AuthProvider>
            {renderRoutes(routes)}
          </AuthProvider>
        </BrowserRouter>
  );
}

export default App;
