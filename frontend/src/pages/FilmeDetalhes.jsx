import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function FilmeDetalhes() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFilme() {
      try {
        const response = await api.get(`/filmes/${id}`);
        setFilme(response.data);
      } catch (error) {
        console.error("Erro ao buscar filme:", error);
      }
    }
    fetchFilme();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Tem certeza que deseja excluir este filme?")) {
      try {
        await api.delete(`/filmes/${id}`);
        navigate("/");
      } catch (error) {
        console.error("Erro ao excluir filme:", error);
      }
    }
  };

  const handleEdit = () => {
    navigate(`/filmes/${id}/editar`);
  };

  if (!filme) return <p>Carregando...</p>;

  return (
    <DashboardLayout>
      <div className="filme_detalhes">
        <img
          src={filme.poster_url || "https://placehold.co/600x400?text=Filme"}
          alt={filme.titulo}
          className="filme_poster"
        />
        <h1>{filme.titulo}</h1>
        <p>
          {filme.ano} - {filme.genero}
        </p>
        <p>{filme.sinopse}</p>

        <div className="filme_actions" style={{ marginTop: "20px" }}>
          <button className="btn_detalhes editar" onClick={handleEdit}>
            Editar
          </button>
          <button
            className="btn_detalhes excluir"
            style={{ marginLeft: "10px" }}
            onClick={handleDelete}
          >
            Excluir
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
