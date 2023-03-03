import React, { useContext, useState } from "react";
import { HomeContext } from "../home/Home";
import "./modalPasajeros.scss";

const ModalPasajeros = ({ data }) => {
  const { hiddeModal, ChangeDataForm } = useContext(HomeContext);
  const [Adultos, setAdultos] = useState(0);
  const [children, setchildren] = useState(0);
  const [bebes, setbebes] = useState(0);

  const actionAdultos = (action) => {
    let cantAdultos;
    if (action === "+") {
      cantAdultos = Adultos + 1;
      setAdultos(cantAdultos);
      cambioCadenaestado(data, "Adultos", cantAdultos);
    } else {
      cantAdultos = Adultos - 1;
      if (cantAdultos > 0) {
        setAdultos(cantAdultos);
        cambioCadenaestado(data, "Adultos", cantAdultos);
      } else {
        setAdultos(0);
        cambioCadenaestado(data, "Adultos", 0);
      }
    }
  };

  const actionNinos = (action) => {
    let cantNinos;

    if (action === "+") {
      cantNinos = children + 1;
      setchildren(cantNinos);
      cambioCadenaestado(data, "Niños", cantNinos);
    } else {
      cantNinos = children - 1;
      if (cantNinos > 0) {
        setchildren(cantNinos);
        cambioCadenaestado(data, "Niños", cantNinos);
      } else {
        setchildren(0);
        cambioCadenaestado(data, "Niños", 0);
      }
    }
  };

  const actionBb = (action) => {
    let cantBbs;
    if (action === "+") {
      cantBbs = bebes + 1;
      setbebes(cantBbs);
      cambioCadenaestado(data, "Bebes", cantBbs);
    } else {
      cantBbs = bebes - 1;
      if (cantBbs > 0) {
        setbebes(cantBbs);
        cambioCadenaestado(data, "Bebes", cantBbs);
      } else {
        setbebes(0);
        cambioCadenaestado(data, "Bebes", 0);
      }
    }
  };

  const cambioCadenaestado = (data, opcion, cant) => {
    let cadenaEstado;

    let adul = "";
    let niño = "";
    let bbs = "";
    let cantadultos = 0;
    let cantNiños = 0;
    let cantBbs = 0;
    let totalpasajeros = 0;
    if (opcion === "Adultos") {
      adul = cant !== 0 ? ` Adultos ${cant} ` : "";
      cantadultos = cant;
    } else if (Adultos !== 0) {
      adul = ` Adultos ${Adultos} `;
      cantadultos = Adultos;
    }

    if (opcion === "Niños") {
      niño = cant !== 0 ? ` Niños ${cant} ` : "";
      cantNiños = cant;
    } else if (children !== 0) {
      niño = ` Niños ${children} `;
      cantNiños = children;
    }

    if (opcion === "Bebes") {
      bbs = cant !== 0 ? ` Bebes ${cant} ` : "";
      cantBbs = cant;
    } else if (bebes !== 0) {
      bbs = ` Bebes ${bebes} `;
      cantBbs = bebes;
    }

    cadenaEstado = adul + niño + bbs;
    totalpasajeros = cantadultos + cantNiños + cantBbs;
    data.pasajeros = cadenaEstado.trim();
    ChangeDataForm({ name: "pasajeros", value: data.pasajeros });
    ChangeDataForm({ name: "cantPasajeros", value: totalpasajeros });
  };

  return (
    <article className={`ModalPasajeros`}>
      <figure>
        <span className="material-symbols-outlined" onClick={hiddeModal}>
          close
        </span>
      </figure>
      <section className="dflexSec">
        <div className="SecAdultos">
          <h3 className="textTitles">Adultos</h3>
          <p className="textDescription">(13 + años)</p>
        </div>
        <div className="Secbuttons">
          <button
            onClick={() => {
              actionAdultos("-");
            }}
          >
            -
          </button>
          <p>{Adultos}</p>
          <button
            onClick={() => {
              actionAdultos("+");
            }}
          >
            +
          </button>
        </div>
      </section>
      <section className="dflexSec">
        <div className="SecNiños">
          <h3 className="textTitles">Niños</h3>
          <p className="textDescription">(2 - 12 años)</p>
        </div>
        <div className="Secbuttons">
          <button
            onClick={() => {
              actionNinos("-");
            }}
          >
            -
          </button>
          <p>{children}</p>
          <button
            onClick={() => {
              actionNinos("+");
            }}
          >
            +
          </button>
        </div>
      </section>
      <section className="dflexSec">
        <div className="Secbb">
          <h3 className="textTitles">Bebés</h3>
          <p className="textDescription">(0 - 1 años)</p>
        </div>
        <div className="Secbuttons">
          <button
            onClick={() => {
              actionBb("-");
            }}
          >
            -
          </button>
          <p>{bebes}</p>
          <button
            onClick={() => {
              actionBb("+");
            }}
          >
            +
          </button>
        </div>
      </section>
    </article>
  );
};

export default ModalPasajeros;
