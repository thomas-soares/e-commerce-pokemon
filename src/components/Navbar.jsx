import './style.css';

function Navbar() {
    return <h1 className="navbar">E-commerce {process.env.REACT_APP_TYPE_SHOP} Pokémon</h1>;
}

export default Navbar;