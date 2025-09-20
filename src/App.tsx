import { Toaster } from "react-hot-toast";

import AppRoutes from "./AppRoutes";
import interceptorService from "./service/interceptorService";
import { AuthProvider } from "./components/AuthUser";

function App() {
  interceptorService.setup();

  return (
    <AuthProvider>
      <Toaster />
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
