import DashboardLayout from "../../layouts/DashboardLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function FilmeCriar() {
  const navigate = useNavigate();
  const [filme, setFilme] = useState({
    titulo: "",
    ano: "",
    genero: "",
    sinopse: "",
    poster_url: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFilme({
      ...filme,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/filmes", filme);
      setLoading(false);
      navigate(`/filme/${response.data.id}`);
    } catch (error) {
      console.error("Erro ao criar filme:", error);
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <h1>Criar Novo Filme</h1>
      <form onSubmit={handleSubmit} className="filme_form">
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="titulo"
            value={filme.titulo}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Ano:</label>
          <input
            type="number"
            name="ano"
            value={filme.ano}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Gênero:</label>
          <input
            type="text"
            name="genero"
            value={filme.genero}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Sinopse:</label>
          <textarea
            name="sinopse"
            value={filme.sinopse}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>URL do Poster:</label>
          <input
            type="text"
            name="poster_url"
            value={filme.poster_url}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Criando..." : "Criar Filme"}
        </button>
      </form>
    </DashboardLayout>
  );
}
