import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import FilmeDetalhes from "./pages/FilmeDetalhes";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import FilmeEditar from "./pages/FilmeEditar/FilmeEditar";
import FilmeCriar from "./pages/FilmeCriar/FilmeCriar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/filme/cadastrar" element={<FilmeCriar />} />
        <Route path="/filme/:id" element={<FilmeDetalhes />} />
        <Route path="/filmes/:id/editar" element={<FilmeEditar />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
