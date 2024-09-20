// ॐ श्री गणेशाय नमः //
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Vault from "./pages/Vault";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="vault" element={<Vault />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
