import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardHorario from "../cardHorario/CardHorario";
import { infoVuelo } from "../infoTrip/InfoTrip";
import "./horariosDisponibles.scss";

export const horarioContext = createContext({});

const HorariosDisponibles = ({
  vuelo,
  date,
  origen,
  destino,
  seleccion,
  handleClick,
}) => {
  const { vuelosRegreso, vuelosSalida, localInfo } = useContext(infoVuelo);

  const navigate = useNavigate();
  const handleHome = () => {
    navigate(`/`);
  };

  return (
    <section className="SecHorarios_Flex">
      <section className="SecHorario">
        <article className="SecHorario__texts">
          <h2 className="h2text1">Vuelo de {vuelo}</h2>
          <h2 className="h2text2">
            {vuelo === "salida" ? localInfo.dateIn : localInfo.dateOut}
          </h2>
          <p className="pText1">
            {vuelo === "salida"
              ? `${localInfo.placeIn} a ${localInfo.placeOut}`
              : `${localInfo.placeOut} a ${localInfo.placeIn}`}
          </p>
          <p className="pText2">Selección de horarios y equipajes</p>
        </article>

        <article className="SecHorario__button">
          <button onClick={handleHome}>Cambiar vuelos</button>
        </article>
      </section>

      <horarioContext.Provider value={{ seleccion, handleClick, vuelo }}>
        {vuelo == "salida" ? (
          <section className="SecVuelosSalida">
            {vuelosSalida
              ? vuelosSalida.map((item, index) => (
                  <CardHorario
                    key={index}
                    horaSalida={item.hourBegin}
                    horaLlegada={item.hourEnd}
                    id={`${index}`}
                  />
                ))
              : ""}
          </section>
        ) : (
          <section className="SecVuelosSalida">
            {vuelosRegreso
              ? vuelosRegreso.map((item, index) => (
                  <CardHorario
                    key={index}
                    horaSalida={item.hourBegin}
                    horaLlegada={item.hourEnd}
                    id={`${index}`}
                  />
                ))
              : ""}
          </section>
        )}
      </horarioContext.Provider>
    </section>
  );
};

export default HorariosDisponibles;
