import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import Avaliação from "./pages/Avaliação";
import Nutrição from "./pages/Nutrição";
import Staff from "./pages/Staff";
import Estúdio from "./pages/Estúdio";
import { AppProvider } from "./contexts/AppContext";
import LogIn from "./pages/LogIn";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      <AppProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="/homepage" />} />
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/avaliação" element={<Avaliação />} />
              <Route path="/nutrição" element={<Nutrição />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/estúdio" element={<Estúdio />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
