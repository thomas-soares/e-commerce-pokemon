import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [totalValue, setTotalValue] = useState();

    useEffect(() => {
        let value = 0;

        cart.map(price => {
            value = value + price;

            return value;
        });

        setTotalValue(value);
    }, [cart]);

    function add(name, price) {
        const pokemon = [name, price]
        const newCart = cart;

        newCart.push(pokemon);

        setCart([...newCart]);
    }

    const store ={
        add,
        cart,
        totalValue
    }

    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    const {
        cart,
        add,
        totalValue
    } = context;

    return {
        cart,
        add,
        totalValue
    }
}