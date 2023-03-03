import React from "react";
import "./cardHorario.scss";
import icon from "../../assets/linea.PNG";
import IconEquipaje from "../iconEquipaje/IconEquipaje";

const precio = [
  {
    type: "1 Objeto personal",
    price: "120.000",
    id: "0",
  },
  {
    type: "Equipaje de mano",
    price: "240.000",
    id: "1",
  },
  {
    type: "Equipaje 25 kg",
    price: "550.000",
    id: "2",
  },
];
const CardHorario = ({ horaSalida, horaLlegada, escala, id }) => {
  return (
    <article className="SecHour">
      <section className="SecHour__time">
        <h2>{horaSalida}</h2>
        <div>
          <p>1h 57min</p>
          <img src={icon} alt="" />
          <p>{escala ? "Con escalas" : "Sin escalas"}</p>
        </div>
        <h2>{horaLlegada}</h2>
      </section>

      <section className="SecHour__icons">
        {precio.map((item, index) => (
          <IconEquipaje
            id={`${index}${id}`}
            key={index}
            type={item.type}
            price={item.price}
          />
        ))}
      </section>
    </article>
  );
};

export default CardHorario;
