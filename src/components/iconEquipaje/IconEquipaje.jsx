import React, { useContext } from "react";
import { horarioContext } from "../horariosDisponibles/HorariosDisponibles";
import "./iconEquipaje.scss";

const IconEquipaje = ({ type, price, id }) => {
  const { handleClick, seleccion, vuelo } = useContext(horarioContext);
  return (
    <figure
      id={id}
      className={`IconEquipaje  ${seleccion[vuelo] == id ? "active" : ""}`}
      onClick={() => {
        handleClick(vuelo, id);
      }}
    >
      <span className="material-symbols-outlined">cases</span>
      <figcaption>
        <p>{type}</p>
        <h4>{price}</h4>
      </figcaption>
    </figure>
  );
};

export default IconEquipaje;
