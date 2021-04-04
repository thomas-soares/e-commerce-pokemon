import '../styles/components/Navbar.css';

export default function Navbar() {
    return <h1 className="navbar">E-commerce {process.env.REACT_APP_TYPE_SHOP} Pokémon</h1>;
}