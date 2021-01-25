import { useCart } from '../../context/cartt'

import './style.css';

function Cart() {
    const { cart, totalValue } = useCart();

    console.log("11111111", cart)
    console.log("11111111", totalValue)

    // TODO: esta adicionando itens vazios, corrigir para adicionar o pokemon
    return (
        <ul className="Cart">
            Carrinho
            {cart.map((cart, i) => {
                console.log(cart)
                console.log(totalValue)
                
                return (
                    <li key={i}>
                        <img src={cart.image} alt="" /> --- {cart.name} --- {cart.price}
                    </li>
                );
            })}

            {console.log(totalValue)}
            <p>Total: ${totalValue}</p>
            <button type="button">Finalizar</button>
        </ul>
    );
}

export default Cart;