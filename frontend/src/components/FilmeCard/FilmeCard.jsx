import { Link } from "react-router-dom";
import "./FilmeCard.css";

export default function FilmeCard({ filme }) {
  return (
    <div className="filme_card">
      <img
        src={filme.poster_url || "https://placehold.co/600x400?text=Filme"}
        alt={filme.titulo}
        className="filme_poster"
      />
      <div className="filme_info">
        <h2 className="filme_titulo">{filme.titulo}</h2>
        <p className="filme_ano">{filme.ano}</p>
        <p className="filme_genero">{filme.genero}</p>
        <Link to={`/filme/${filme.id}`} className="btn_detalhes">
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
