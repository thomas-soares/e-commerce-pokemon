import { useState } from 'react';
import { useCart } from '../../context/cartt';
import Modal from '../../components/Modal';

import './style.css';

function Cart() {
    const { cart, totalValue, checkout } = useCart();
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <ul className="Cart">
                Carrinho
                {cart.map((cart, i) => {
                    return (
                        <li key={i}>
                            <img src={cart.image} alt="" /> --- {cart.name} --- {cart.price}
                        </li>
                    );
                })}

                <p>Total: ${totalValue}</p>
                <button type="button" onClick={() => {checkout(); setModalOpen(true);}}>Finalizar</button>
            </ul>

            { modalOpen && <Modal /> }
        </>
    );
}

export default Cart;