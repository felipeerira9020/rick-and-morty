import { useDispatch } from "react-redux";

import { useSelector } from "../store/store";
import {
  addFavouriteCharacterAction,
  deleteFavouriteCharacter,
} from "../actions/actions";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";

import "./Detalle.css";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalle /> ```
 *
 *
 * @returns la pagina de detalle
 */

const PaginaDetalle = () => {
  const currentCharacter = useSelector(
    (state) => state.characters.currentCharacter
  );
  const { favourites } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const handleFavouriteClick = () => {
    if (favourites.find((element) => element.id === currentCharacter.id)) {
      dispatch(deleteFavouriteCharacter(currentCharacter));
    } else {
      dispatch(addFavouriteCharacterAction(currentCharacter));
    }
  };

  return (
    <div className="container">
      <h3>{currentCharacter?.name}</h3>
      <div className={"detalle"}>
        <div className={"detalle-header"}>
          <img src={currentCharacter?.image} alt={currentCharacter?.name} />
          <div className={"detalle-header-texto"}>
            <p>{currentCharacter?.name}</p>
            <p>Planeta: {currentCharacter?.location.name.split("(")[0]}</p>
            <p>Genero: {currentCharacter?.gender}</p>
          </div>
          <div onClick={handleFavouriteClick}>
            <BotonFavorito
              esFavorito={
                favourites.find((element) => element.id === currentCharacter.id)
                  ? true
                  : false
              }
            />
          </div>
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={"episodios-grilla"}>
        <TarjetaEpisodio />
        <TarjetaEpisodio />
        <TarjetaEpisodio />
      </div>
    </div>
  );
};

export default PaginaDetalle;
