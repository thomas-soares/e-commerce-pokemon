import { useCart } from '../context/cartContext'
import typeColors from '../helpers/typeColors'

import styles from '../styles/components/Card.module.css';

export default function Card({ pokemon }) {
    const price = pokemon.id * 3;

    const { add } = useCart();

    return (
        <div className={styles.card}>
            <div className="card__container">
                <div className="card__img">
                    <img src={pokemon.sprites.front_default} alt="" />
                </div>
                <div className="card__name">
                    {`${pokemon.id}. ${pokemon.name}`}
                </div>
                <div className="card__name">
                    {`Price: $${price}`}
                </div>
                <div className="card__types">
                    {
                        pokemon.types.map(type => {
                            return (
                                <div className="card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                    {type.type.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="card__info">
                    <div className="card__data card__data--weight">
                        <p className="title">Weight</p>
                        <p>{pokemon.weight}</p>
                    </div>
                    <div className="card__data card__data--weight">
                        <p className="title">Height</p>
                        <p>{pokemon.height}</p>
                    </div>
                    <div className="card__data card__data--ability">
                        <p className="title">Ability</p>
                        <p>{pokemon.abilities[0].ability.name}</p>
                    </div>
                </div>
            </div>
            <button type="button" className="card__add" onClick={() => add(pokemon.name, price, pokemon.sprites.front_default)}>Adicionar</button>
        </div>
    );
}