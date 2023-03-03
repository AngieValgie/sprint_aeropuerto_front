import React, { useContext } from "react";
import { HomeContext } from "../home/Home";
import "./stylesForm.scss";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { goToLocal } from "../../services/infolocal";

const FormMain = ({ classPosition, data = {} }) => {
  const navigate = useNavigate();
  const {
    hiddeModal,
    changeOpcionModal,
    changeOpCalendar,
    ChangeDataForm,
    changeOplace,
    dateOut,
    changeDateOut,
    changeOpcionTravel,
    travelOpcion,
    formData,
  } = useContext(HomeContext);

  const DateOut = (date) => {
    if (travelOpcion) {
      if (date.length !== 0) {
        changeDateOut(date);
      }
      ChangeDataForm({ name: "dateOut", value: dateOut });
    } else {
      ChangeDataForm({ name: "dateOut", value: "" });
    }
  };

  const validate = () => {
    if (!travelOpcion) {
      if (
        formData.placeIn.length !== 0 &&
        formData.placeOut.length !== 0 &&
        formData.dateIn.length !== 0 &&
        formData.dateOut.length !== 0 &&
        formData.pasajeros.length !== 0
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      if (
        formData.placeIn.length !== 0 &&
        formData.placeOut.length !== 0 &&
        formData.dateIn.length !== 0 &&
        formData.pasajeros.length !== 0
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  const sendForm = () => {
    if (!validate()) {
      Swal.fire({
        title: "Error!",
        text: "Por favor no dejar campos vacíos",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    } else {
      goToLocal(formData);
      navigate(`vuelo/Horarios`);
    }
  };

  return (
    <section className={`formTravel ${classPosition}`}>
      <h2 className="titleForm">
        Busca un nuevo destino y <br /> comienza la aventura.
      </h2>
      <p className="subtitleForm">
        descubre vuelos al mejor precio y perfectos para cualquier viaje
      </p>
      <section className="Form__SecButtons borderInputs">
        <span
          className={travelOpcion === true ? "" : "activeTravel"}
          onClick={() => {
            changeOpcionTravel();
            DateOut(formData.dateOut);
          }}
        >
          Viaje rendondo
        </span>
        <span
          className={travelOpcion === true ? "activeTravel" : ""}
          onClick={() => {
            changeOpcionTravel();
            DateOut(formData.dateOut);
          }}
        >
          Viaje sencillo
        </span>
      </section>
      <section className="Form__SecInputs">
        <section className="d-flexSec">
          <div
            className="SecTravel borderInputs"
            onClick={() => {
              hiddeModal();
              changeOpcionModal(1);
              changeOplace(0);
            }}
          >
            <input
              type="text"
              placeholder="Ciudad de México"
              name="placeIn"
              className="inputForm"
              readOnly
              defaultValue={data.placeIn ? data.placeIn : ""}
            />
            <p className="textinfo">Origen</p>
          </div>
          <div
            className="SecTravel borderInputs"
            onClick={() => {
              hiddeModal();
              changeOpcionModal(1);
              changeOplace(1);
            }}
          >
            <input
              type="text"
              placeholder="---"
              name="placeOut"
              className="inputForm"
              readOnly
              defaultValue={data.placeOut ? data.placeOut : ""}
            />
            <p className="textinfo">Selecciona un destino</p>
          </div>
        </section>
        <section className="d-flexSec">
          <div
            className="SecDate borderInputs"
            onClick={() => {
              hiddeModal();
              changeOpcionModal(2);
              changeOpCalendar(0);
            }}
          >
            <span className="material-symbols-outlined">calendar_month</span>
            <div className="SecDate__texts">
              <p className="textinfo">Salida</p>
              <input
                type="text"
                placeholder="Mar,4,Ene,2023"
                className="inputForm inputformDate"
                name="dateIn"
                readOnly
                defaultValue={data.dateIn ? data.dateIn : ""}
              />
            </div>
          </div>
          <div
            className={`SecDate borderInputs ${travelOpcion ? "hidden" : ""}`}
            onClick={() => {
              hiddeModal();
              changeOpcionModal(2);
              changeOpCalendar(1);
            }}
          >
            <span className="material-symbols-outlined">calendar_month</span>
            <div className="SecDate__texts">
              <p className="textinfo">Regreso</p>
              <input
                type="text"
                placeholder="Mar,4,Ene,2023"
                className="inputForm inputformDate"
                name="dateOut"
                readOnly
                defaultValue={data.dateOut ? data.dateOut : ""}
              />
            </div>
          </div>
        </section>
        <section className="d-flexSec">
          <div
            className="SecDataFlight borderInputs"
            onClick={() => {
              hiddeModal();
              changeOpcionModal(3);
            }}
          >
            <p className="textinfo">Pasajeros</p>
            <input
              type="text"
              placeholder="1 adulto"
              className="inputForm inputFormFlight"
              name="pasajeros"
              readOnly
              defaultValue={data.pasajeros ? data.pasajeros : ""}
            />
          </div>
          <div className="SecDataFlight borderInputs">
            <p className="textinfo">¿Tienes un código de promoción?</p>
            <input
              type="text"
              placeholder="---"
              name="codprom"
              className="inputForm inputFormFlight"
              onChange={(e) => {
                ChangeDataForm({
                  name: "codprom",
                  value: e.target.value,
                });
              }}
            />
          </div>
        </section>
      </section>
      <button className="btnSendFormFlight" onClick={sendForm}>
        <span className="material-symbols-outlined">flight</span>
        Buscar vuelos
      </button>
    </section>
  );
};

export default FormMain;
