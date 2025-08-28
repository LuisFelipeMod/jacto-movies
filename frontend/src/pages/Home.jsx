import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFilmes } from "../redux/filmesSlice";
import FilmeCard from "../components/FilmeCard/FilmeCard";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filmes = useSelector((state) => state.filmes.filmes);
  const pagination = useSelector((state) => state.filmes.pagination);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchFilmes(currentPage));
  }, [dispatch, currentPage]);

  const handleNext = () => {
    if (currentPage < pagination.lastPage) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleCadastrar = () => {
    navigate("/filme/cadastrar");
  };

  return (
    <DashboardLayout>
      <div className="home_header">
        <h1 className="home_title">Filmes</h1>
        <button className="btn_detalhes btn_cadastrar" onClick={handleCadastrar}>
          Cadastrar Novo Filme
        </button>
      </div>

      <div className="filme_card__box">
        {filmes.map((f) => (
          <FilmeCard key={f.id} filme={f} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>
          Página {pagination.currentPage} de {pagination.lastPage}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === pagination.lastPage}
        >
          Próximo
        </button>
      </div>
    </DashboardLayout>
  );
}
