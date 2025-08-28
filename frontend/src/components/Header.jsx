
import Logo from "../assets/Logo.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import { Navigate } from "react-router-dom";

export default function Header({ children }) {
  return (
    <header className="header">
      <a href="/">
        <img width={207} height={90} src={Logo} className="header_logo" alt="logo da plataforma" />
      </a>
      {children}
    </header>
  );
}
