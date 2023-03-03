import React, { useContext } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { HomeContext } from "../home/Home";
import "./calendario.scss";

const Calendario = () => {
  const { hiddeModal, ChangeDataForm, changeDateOut, opTravel } =
    useContext(HomeContext);

  const handleSelect = (date) => {
    console.log(opTravel);
    if (opTravel === 0) {
      ChangeDataForm({
        name: "dateIn",
        value: date.toLocaleDateString("es-ES", {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      });
    } else {
      ChangeDataForm({
        name: "dateOut",
        value: date.toLocaleDateString("es-ES", {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      });
      changeDateOut(
        date.toLocaleDateString("es-ES", {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      );
    }
    hiddeModal();
  };

  return (
    <article className={`ModalCalendar`}>
      <figure>
        <h3>Selecciona tus fechas</h3>
        <span className="material-symbols-outlined" onClick={hiddeModal}>
          close
        </span>
      </figure>
      <p>fecha de salida</p>
      <Calendar date={new Date()} onChange={handleSelect} />
    </article>
  );
};

export default Calendario;
