import React, { useContext } from "react";
import { PlaneContext } from "../SecAsientos";
import "./asiento.scss";

const Asiento = ({ type, children, id }) => {
  const { handleClick, click } = useContext(PlaneContext);
  const handleVerification = (e) => {
    if (type !== "headerFilas" && type !== "ocupado") {
      handleClick(e);
    }
  };

  const handleSelect = (id) => {
    if (click.includes(id)) {
      return "seleccion";
    }
  };

  return (
    <figure
      id={id}
      onClick={(e) => handleVerification(e)}
      className={`icon_Asiento ${type} ${handleSelect(id)}`}
    >
      {children
        ? children
        : handleSelect(id) === "seleccion"
        ? click.indexOf(id) + 1
        : ""}
    </figure>
  );
};

export default Asiento;
