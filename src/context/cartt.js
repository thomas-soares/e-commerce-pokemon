import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [totalValue, setTotalValue] = useState();

    useEffect(() => {
        let value = 0;

        console.log("AQUIIIII", cart)
        
        cart.map(item => {
            console.log("AQUIIIII2222222", item.price)
            
            value = value + item.price;

            return value;
        });

        setTotalValue(value);
    }, [cart]);

    function add(name, price, image) {
        const pokemon = {
            name: name,
            price: price,
            image: image
        }
 
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