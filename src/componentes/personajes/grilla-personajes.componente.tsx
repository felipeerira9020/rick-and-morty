import { Character } from "../../types/type";
import { FC } from "react";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { useSelector } from "../../store/store";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error al cargar los personajes.</div>;
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
