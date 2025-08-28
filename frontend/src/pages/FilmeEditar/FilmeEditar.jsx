import DashboardLayout from "../../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./FilmeEditar.css";

export default function FilmeEditar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState({
    titulo: "",
    ano: "",
    genero: "",
    sinopse: "",
    poster_url: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFilme() {
      try {
        const response = await api.get(`/filmes/${id}`);
        setFilme(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar filme:", error);
        setLoading(false);
      }
    }
    fetchFilme();
  }, [id]);

  const handleChange = (e) => {
    setFilme({
      ...filme,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/filmes/${id}`, filme);
      navigate(`/filme/${id}`);
    } catch (error) {
      console.error("Erro ao atualizar filme:", error);
    }
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <DashboardLayout>
      <h1>Editar Filme</h1>
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

        <button type="submit" className="btn btn-primary">
          Salvar Alterações
        </button>
      </form>
    </DashboardLayout>
  );
}
