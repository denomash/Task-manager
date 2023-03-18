import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-left">
          <Link to="/">Task Management</Link>
        </div>
        <div className="nav-right">
          <div className="tabs underline">
            <Link to="/">Tasks</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
