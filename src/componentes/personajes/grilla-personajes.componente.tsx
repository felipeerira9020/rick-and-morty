import { FC } from "react";

import { Character } from "../../types/type";
import { useSelector } from "../../store/store";
import TarjetaPersonaje from "./tarjeta-personaje.componente";

import "./grilla-personajes.css";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */
interface Props {
  characters: Character[];
}

const GrillaPersonajes: FC<Props> = ({ characters }) => {
  const { error, favourites, status } = useSelector(
    (state) => state.characters
  );

  if (status === "Loading") {
    return <div>Cargando.......</div>;
  }

  if (error) {
    return <div>Error al cargar....</div>;
  }

  return (
    <div className="grilla-personajes">
      {characters.map((character) => (
        <TarjetaPersonaje
          key={character.id}
          character={character}
          favourites={favourites}
        />
      ))}
    </div>
  );
};

export default GrillaPersonajes;
