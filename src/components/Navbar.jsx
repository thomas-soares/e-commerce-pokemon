import styles from '../styles/components/Navbar.module.css';

export default function Navbar() {
    return <h1 className={styles.navbar}>E-commerce {process.env.REACT_APP_TYPE_SHOP} Pokémon</h1>;
}