import { useState } from 'react';
import { useCart } from '../context/cartContext';
import Modal from './Modal';

export default function Cart() {
    const { cart, totalValue, checkout } = useCart();
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="cart">
                <div className="cart__container">
                    <p className="cart__title">Carrinho</p>
                    <ul className="cart__list">
                        {cart.map((cart, i) => {
                            return (
                                <li key={i} className="cart__item">
                                    <img src={cart.image} className="cart__item__image" alt="" /><span className="cart__item__name">{cart.name}</span><span className="cart__item__price">${cart.price}</span>
                                </li>
                            );
                        })}

                    </ul>
                </div>
                <div className="cart__container__resume">
                    <p className="cart__container__total">Total: ${totalValue}</p>
                    <button type="button" className="cart__container__checkout" onClick={() => {checkout(); setModalOpen(true);}}>Finalizar</button>
                </div>
            </div>

            {
                modalOpen && 
                <>
                    <span className="modal__overlay" onClick={() => setModalOpen(false)}></span>
                    <div className="cart__container__modal">
                        <button type="button" className="cart__close__modal" onClick={() => setModalOpen(false)}>X</button>
                        <Modal />
                    </div>
                </>
            }
        </>
    );
}