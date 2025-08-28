import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/authSlice";
import "./SignUp.css";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { isRegistered } = useSelector((state) => state.auth);

  function handleRegister(e) {
    e.preventDefault();
    dispatch(
      registerUser({
        name,
        email,
        password,
        password_confirmation: passwordConfirm,
      })
    );
  }

  useEffect(() => {
    if (isRegistered) {
      navigate("/login");
    }
  }, [isRegistered, navigate, dispatch]);

  return (
    <div className="signup_container">
      <form onSubmit={handleRegister} className="signup_form">
        <h2>Cadastro</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="Confirmar senha"
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
