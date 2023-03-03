import React, { useContext, useState } from "react";
import Asiento from "../Asiento/Asiento";
import { PlaneContext } from "../SecAsientos";
import "./pasillo.scss";

const Pasillo = ({ vocales, sec, type }) => {
  const { numeroAsientos, click, ocupados, pasajeros } =
    useContext(PlaneContext);
  const [countSeats, setcountSeats] = useState(0);

  const handleDisponible = (sec, id1, id2) => {
    let count = countSeats;
    if (sec == 1 && ocupados.includes(id1)) {
      return "ocupado";
    } else if (sec !== 1 && ocupados.includes(id2)) {
      return "ocupado";
    } else {
      return "disponible";
    }
  };

  return (
    <section className="secPasillo">
      <section className="secPasillo__header">
        {sec === 1 ? (
          <Asiento type="headerFilas">{sec == 1 ? vocales : ""}</Asiento>
        ) : (
          ""
        )}
      </section>

      <section className="secPasillo__pasillo">
        {[...Array(numeroAsientos)].map((_, index) =>
          type !== "pasillo" ? (
            <Asiento
              key={index}
              id={
                sec == 1
                  ? `${index + 1}${vocales}1`
                  : `${index + (numeroAsientos + 1)}${vocales}2`
              }
              type={handleDisponible(
                sec,
                `${index + 1}${vocales}1`,
                `${index + (numeroAsientos + 1)}${vocales}2`
              )}
            />
          ) : sec == 1 ? (
            <Asiento key={index} type="headerFilas">
              {index + 1}
            </Asiento>
          ) : (
            <Asiento key={index} type="headerFilas">
              {index + (numeroAsientos + 1)}
            </Asiento>
          )
        )}
      </section>
    </section>
  );
};

export default Pasillo;
