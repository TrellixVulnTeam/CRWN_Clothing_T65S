import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-comtainer">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;