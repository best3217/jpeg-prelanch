// import { Link } from "react-router-dom"
import logo from "../assets/images/logo.svg";
import ConnectBtn from "./connectBtn";

export default function Header() {
  return (
    <header className="landing-header">
      <div className="container">
        <nav>
          <div className="logo-brand">
            {/* <Link to="/"> */}
              <img src={logo} alt="logo" className="logo" />
            {/* </Link> */}
          </div>
          <ConnectBtn className="btn btn-waitlist">Join Waitlist</ConnectBtn>
        </nav>
      </div>
    </header>
  );
}
