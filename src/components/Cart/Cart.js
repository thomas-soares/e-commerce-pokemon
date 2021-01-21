import { useCart } from '../../context/cartt'

import './style.css';

function Cart() {
    const { cart } = useCart();

    // TODO: esta adicionando itens vazios, corrigir para adicionar o pokemon
    return (
        <ul className="Cart">
            {cart.map((item) => (
                <li key={item.id}>{item.price}</li>
            ))}
        </ul>
    );
}

export default Cart;