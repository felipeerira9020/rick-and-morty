import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useDispatch } from "react-redux";
import { useSelector } from "../store/store";
import { FC } from "react";
import { searchCharactersThunk } from "../actions/actions";
import BotonDelete from "../componentes/botones/boton-delete.componente";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio: FC = () => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characters);

  const handleClick = () => {
    dispatch(searchCharactersThunk("", 1));
  };
  
  return (
    <div className="container">
      <BotonDelete
        title="Catálogo de Personajes"
        buttonName="Limpiar filtro"
        handleClick={handleClick}
      />
      <Filtros />
      <Paginacion />
      <GrillaPersonajes characters={characters} />
      <Paginacion />
    </div>
  );
};

export default PaginaInicio;
