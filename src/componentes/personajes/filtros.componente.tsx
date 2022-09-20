import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "../../store/store";
import { findCharactersThunk } from "../../actions/actions";

import "./filtros.css";

const Filtros: FC = () => {
  const dispatch = useDispatch();
  const { busqueda } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(findCharactersThunk("", 1));
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(findCharactersThunk(event.target.value, 1));
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={handleChange}
        value={busqueda}
      />
    </div>
  );
};

export default Filtros;
