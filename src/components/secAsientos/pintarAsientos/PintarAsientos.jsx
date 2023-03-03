import React, { useContext } from "react";
import Pasillo from "../pasillo/Pasillo";
import { PlaneContext } from "../SecAsientos";

import "./pintarAsientos.scss";

const PintarAsientos = () => {
  const { columnas, sec } = useContext(PlaneContext);

  const abecedario = ["A", "B", "C", "", "D", "E", "F"];
  return (
    <section>
      {[...Array(sec)].map((_, ind) => (
        <section key={ind} className="secBlock">
          {abecedario.map((letra, index) =>
            index < columnas ? (
              <Pasillo key={index} vocales={letra} sec={ind + 1} />
            ) : index == columnas ? (
              <Pasillo key={index} type="pasillo" sec={ind + 1} />
            ) : (
              <Pasillo key={index} vocales={letra} sec={ind + 1} />
            )
          )}
        </section>
      ))}
    </section>
  );
};

export default PintarAsientos;
