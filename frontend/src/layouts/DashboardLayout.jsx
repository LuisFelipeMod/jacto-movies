import Header from "../components/Header";
import ArrowDown from "../assets/ArrowDown.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // se estiver usando react-router-dom
import { logoutUser } from "../redux/authSlice";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const actions = [
    {
      title: "Sair",
      action: handleLogout,
    },
  ];

  return (
    <>
      <Header>
        <div className="user" onClick={() => setIsOpen(!isOpen)}>
          <img
            className="user_img"
            src="https://placehold.co/50"
            alt="Imagem do usuário"
            width={40}
            height={40}
          />

          <strong>Luis Modesto</strong>

          <img
            className="user_arrow__down"
            src={ArrowDown}
            alt="Seta para abrir as opções de usuário"
            width={20}
            height={20}
          />

          <div className={`user_actions ${isOpen ? "open" : ""}`}>
            {actions.map((item, index) => (
              <button
                className="user_actions__btn"
                key={index}
                onClick={item.action}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </Header>
      {children}
    </>
  );
}
