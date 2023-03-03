import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../horariosDisponibles/horariosDisponibles.scss";
import { infoVuelo } from "../infoTrip/InfoTrip";
import PintarAsientos from "./pintarAsientos/PintarAsientos";

export const PlaneContext = createContext({});

const SecAsientos = ({ vuelo, date, origen, destino }) => {
  const navigate = useNavigate();
  const [ocupados, setocupados] = useState([
    "1C1",
    "4C1",
    "1D1",
    "1E1",
    "4D3",
    "5E2",
  ]);

  const [numeroAsientos, setnumeroAsientos] = useState(3);
  const [sec, setsec] = useState(2);
  const [columnas, setcolumnas] = useState(3);
  const [click, setclick] = useState([]);
  const [pasajeros, setpasajeros] = useState(5);
  const { vuelosRegreso, vuelosSalida, localInfo } = useContext(infoVuelo);

  const handleClick = ({ target }) => {
    if (click.length < pasajeros) {
      setclick([...click, target.id]);
    } else if (target.classList.contains("seleccion")) {
      const indice = click.indexOf(target.id);
      let arrayAsientos = click;
      arrayAsientos.splice(indice, 1, "");
      setclick([...arrayAsientos]);
    } else {
      let index = click.indexOf("");
      let arrayModificado = click;
      arrayModificado.splice(index, 1, target.id);
      setclick([...arrayModificado]);
    }
  };

  const hadleHome = () => {
    navigate(`/`);
  };

  return (
    <section className="SecHorario">
      <article className="SecHorario__texts">
        <h2 className="h2text1">Vuelo de {vuelo}</h2>
        <h2 className="h2text2">
          {vuelo === "salida" ? localInfo.dateIn : localInfo.dateOut}
        </h2>
        <p className="pText1">{`${localInfo.placeIn} a ${localInfo.placeOut}`}</p>
      </article>

      <article className="SecHorario__button">
        <button onClick={hadleHome}>Cambiar vuelos</button>
      </article>

      <section className="SecAsientosContainer">
        <h4>Selecciona tu Asiento</h4>
        <article className="SecAsientos">
          <PlaneContext.Provider
            value={{
              numeroAsientos,
              columnas,
              sec,
              handleClick,
              ocupados,
              click,
              pasajeros,
            }}
          >
            <PintarAsientos />
          </PlaneContext.Provider>
        </article>
      </section>
    </section>
  );
};

export default SecAsientos;
