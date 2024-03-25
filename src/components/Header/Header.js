import logo from "../../images/logoBEEO.jpg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo"></img>
    </header>
  );
}
