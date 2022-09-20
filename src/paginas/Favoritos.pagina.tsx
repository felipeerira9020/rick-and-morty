import BotonDelete from "../componentes/botones/boton-delete.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useDispatch } from "react-redux";
import { deleteAllFavouriteCharacter } from "../actions/actions";
import { FC } from "react";
import { useSelector } from "../store/store";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */

const PaginaFavoritos: FC = () => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.characters);

  const handleClick = () => {
    dispatch(deleteAllFavouriteCharacter());
  };

  return (
    <div className="container">
      <BotonDelete
        title="Personajes Favoritos"
        buttonName="Eliminar todos"
        handleClick={handleClick}
      />
      <GrillaPersonajes characters={favourites} />
    </div>
  );
};

export default PaginaFavoritos;
