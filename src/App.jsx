import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { store } from "./store/store";
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <>
        <Encabezado />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="favoritos" element={<PaginaFavoritos />} />
          <Route path="detalle" element={<PaginaDetalle />} />
        </Routes>
      </>
    </Provider>
  );
}

export default App;
