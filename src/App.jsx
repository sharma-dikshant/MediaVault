// ॐ श्री गणेशाय नमः //
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Vault from "./pages/Vault";
import LoginForm from "./ui/LoginForm";
import Protected from "./ui/Protected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="user/:userId" element={<Home />} />
          <Route path="vault" element={<Protected Component={Vault} />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
