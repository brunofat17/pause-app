import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import Avaliação from "./pages/Avaliação";
import Nutrição from "./pages/Nutrição";
import Staff from "./pages/Staff";
import { AppProvider } from "./contexts/AppContext";
import LogIn from "./pages/LogIn";
import Logout from "./pages/Logout";
import Treino from "./pages/Treino";
import NewUserForm from "./pages/NewUserForm";

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
              <Route path="/treino" element={<Treino />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/new-user" element={<NewUserForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
