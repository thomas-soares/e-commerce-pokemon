import { useCart } from '../../context/cartt'

import './style.css';

function Cart() {
    const { cart } = useCart();

    console.log("11111111", cart)

    // TODO: esta adicionando itens vazios, corrigir para adicionar o pokemon
    return (
        <ul className="Cart">
            {cart.map((cart, i) => {
                console.log(cart)

                return <li key={i}>{cart}</li>
            }
            )}
        </ul>
    );
}

export default Cart;