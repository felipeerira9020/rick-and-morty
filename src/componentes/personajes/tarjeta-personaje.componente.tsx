import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  addFavouriteCharacterAction,
  deleteFavouriteCharacter,
  findCharacterByIdThunk,
} from "../../actions/actions";
import { Character } from "../../types/type";
import BotonFavorito from "../botones/boton-favorito.componente";

import "./tarjeta-personaje.css";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */

interface TarjetaPersonajeProps {
  character: Character;
  favourites: Character[];
}

const TarjetaPersonaje: FC<TarjetaPersonajeProps> = ({
  character,
  favourites,
}: TarjetaPersonajeProps) => {
  const dispatch = useDispatch();

  const [isFavourite, setIsFavourite] = useState(
    favourites.find((element) => element.id === character.id) ? true : false
  );

  const handleFavouriteClick = () => {
    if (favourites.find((element) => element.id === character.id)) {
      dispatch(deleteFavouriteCharacter(character));
      setIsFavourite(false);
    } else {
      dispatch(addFavouriteCharacterAction(character));
      setIsFavourite(true);
    }
  };

  const handleClick = () => {
    dispatch(findCharacterByIdThunk(character.id));
  };

  return (
    <div className="tarjeta-personaje">
      <Link to="/detalle" onClick={handleClick}>
        <img src={character.image} alt={character.name} />
      </Link>
      <div className="tarjeta-personaje-body">
        <Link to="/detalle" onClick={handleClick}>
          <span>{character.name}</span>
        </Link>
        <div onClick={handleFavouriteClick}>
          <BotonFavorito esFavorito={isFavourite} />
        </div>
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
