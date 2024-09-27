import { useContext } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';
import DataContext from '../state/DataContext';

function Navbar() {

  const{ user, cart} = useContext(DataContext);


  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Electopia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"> 
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              </li>
            <li className="nav-item">  
              <Link className="nav-link active" aria-current="page" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">

            <label className='btn btn-outline-dark'>{user.name}</label>

            <Link className="btn btn-outline-dark ms-2" to="/cart">
             {cart.length} View Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
/**
 * 
 * register route for /cart
 * 
 * change button for link to cart
 * 
 * 
 */
export default Navbar;