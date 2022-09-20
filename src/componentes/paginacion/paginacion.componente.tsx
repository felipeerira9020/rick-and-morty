import { FC } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "../../store/store";
import { findCharactersThunk } from "../../actions/actions";

import "./paginacion.css";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */

const Paginacion: FC = () => {
  const dispatch = useDispatch();
  const { busqueda, currentPage, totalPages } = useSelector(
    (state) => state.characters
  );

  const handleClick = (event: any) => {
    event.target.innerText === "Anterior"
      ? dispatch(findCharactersThunk(busqueda, currentPage - 1))
      : dispatch(findCharactersThunk(busqueda, currentPage + 1));
  };

  return (
    <div className="paginacion">
      <button
        disabled={currentPage === 1 ? true : false}
        className={"primary"}
        onClick={handleClick}
      >
        Anterior
      </button>
      <button
        disabled={currentPage === totalPages ? true : false}
        className={"primary"}
        onClick={handleClick}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
