import {FC} from 'react';

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
  data: Character;
  favoritos: Character[];
}

const TarjetaPersonaje: FC<TarjetaPersonajeProps> = ({ data, favoritos }: TarjetaPersonajeProps) => {

  return (
    <div className="tarjeta-personaje">
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick Sanchez"
      />
      <div className="tarjeta-personaje-body">
        <span>Rick Sanchez</span>
        <BotonFavorito esFavorito={false} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
