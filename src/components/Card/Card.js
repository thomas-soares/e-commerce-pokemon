import { useCart } from '../../context/cartt'
import typeColors from '../../helpers/typeColors'
import './style.css';

function Card({ pokemon }) {
    const price = pokemon.id * 3;

    const { add } = useCart();

    return (
        <div className="Card">
            <div className="Card__img">
                {/* TODO: colocar foto do pokemon de costas tbm, com botão para virar */}
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                {`${pokemon.id}. ${pokemon.name}`}
            </div>
            <div className="Card__name">
                {`Price: $${price}`}
            </div>
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card__info">
                {/* <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div> */}
                <div className="Card__data">
                    <button type="button" onClick={() => add(pokemon.name)}>Adicionar</button>
                </div>
            </div>
        </div>
    );
}

export default Card;