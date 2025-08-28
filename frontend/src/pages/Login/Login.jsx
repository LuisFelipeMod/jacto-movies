import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../redux/authSlice";
import "./Login.css"; 

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated } = useSelector((state) => state.auth);

  function handleLogin(e) {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="login_container">
      <form onSubmit={handleLogin} className="login_form">
        <h2>Entrar</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        <p>
          Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
        </p>
      </form>
    </div>
  );
}
