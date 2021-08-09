import "./style.css";
import marvel_logo from "../../assets/marvel_logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={marvel_logo} alt="Marvel logo" className="marvel_logo" />
    </div>
  );
};

export default Header;
