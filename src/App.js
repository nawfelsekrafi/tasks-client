import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import "./App.scss";
import { AuthProvider } from "./contexts/JWTAuthContext";
import routes, { renderRoutes } from "./routes";

function App() {

  return (
    <div
    >
      <SnackbarProvider
        maxSnack={12}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <BrowserRouter>
          <AuthProvider>{renderRoutes(routes)}</AuthProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}

export default App;
