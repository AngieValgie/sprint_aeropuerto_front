import React, { useContext, useEffect } from "react";
import "./bill.scss";
import icon from "../../assets/minus.svg";
import { infoVuelo } from "../infoTrip/InfoTrip";
import { useNavigate } from "react-router-dom";

const Bill = () => {
  const { seleccion, horarios, localInfo, vuelosRegreso, vuelosSalida } =
    useContext(infoVuelo);

  const navigate = useNavigate();
  const handleAsientos = () => {
    navigate(`/vuelo/Asientos`);
  };

  return (
    <section className="SecFactura">
      <article className="SecFactura__reserva">
        <h3>Tu reservación</h3>
        <section className="SecFactura__padding">
          <div className="SecFactura__pasajero">
            <p>Pasajeros</p>
            <p>{localInfo?.pasajeros}</p>
          </div>
          <h3 className="ExitFlightTxt">Vuelo de salida</h3>
          <div className="SecFactura__date">
            <div>
              <h2>{localInfo?.placeIn}</h2>{" "}
              <p>
                {vuelosSalida
                  ? vuelosSalida.map((item, index) =>
                      Object.entries(seleccion).length !== 0
                        ? seleccion.salida.charAt(1) == index
                          ? item.hourBegin
                          : ""
                        : ""
                    )
                  : ""}
              </p>
            </div>

            <figure>
              <img src={icon} alt="" />
            </figure>

            <div>
              <h2>{localInfo?.placeOut}</h2>{" "}
              <p>
                {vuelosSalida
                  ? vuelosSalida.map((item, index) =>
                      Object.entries(seleccion).length !== 0
                        ? seleccion.salida.charAt(1) == index
                          ? item.hourEnd
                          : ""
                        : ""
                    )
                  : ""}
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------------- */}
          <h3 className="ExitFlightTxt">Vuelo de Regreso</h3>
          <div className="SecFactura__date">
            <div>
              <h2>{localInfo?.placeOut}</h2>{" "}
              <p>
                {vuelosRegreso
                  ? vuelosRegreso.map((item, index) =>
                      Object.entries(seleccion).length !== 0
                        ? seleccion.regreso.charAt(1) == index
                          ? item.hourBegin
                          : ""
                        : ""
                    )
                  : ""}
              </p>
            </div>

            <figure>
              <img src={icon} alt="" />
            </figure>

            <div>
              <h2>{localInfo?.placeIn}</h2>{" "}
              <p>
                {vuelosRegreso
                  ? vuelosRegreso.map((item, index) =>
                      Object.entries(seleccion).length !== 0
                        ? seleccion.regreso.charAt(1) == index
                          ? item.hourEnd
                          : ""
                        : ""
                    )
                  : ""}
              </p>
            </div>
          </div>

          <p className="billFooterTxt">14/09/2023</p>
        </section>
      </article>

      <article className="SecFactura__Pago">
        <h3>Costo de vuelo</h3>
        <section className="SecFactura__padding cardFlex">
          <div className="SecFactura__Pago__flex">
            <p>Tarifa base</p>
            <p>$1,5000</p>
          </div>
          <div className="SecFactura__Pago__flex">
            <p>Descuento promocional</p>
            <p>-$17800</p>
          </div>
          <div className="SecFactura__Pago__flex">
            <p>Tarifa base con descuento</p>
            <p>$471,00</p>
          </div>
          <div className="SecFactura__Pago__flex">
            <p>Iva Tarifa</p>
            <p>$75,MX</p>
          </div>
          <div className="SecFactura__Pago__flex">
            <h4>Total</h4>
            <h4>$548 MX</h4>
          </div>
        </section>
      </article>

      <article className="SecFactura__Pago">
        <h3>Servicios opcionales</h3>
        <section className="SecFactura__padding cardFlex">
          <div className="SecFactura__Pago__flex">
            <p>Selecciona tu asiento </p>
            <p>$1,5000</p>
          </div>
          <div className="SecFactura__Pago__flex">
            <p>IVA Servicios</p>
            <p>-$17800</p>
          </div>
          <div className="SecFactura__Pago__flex">
            <h4>Total</h4>
            <h4>$548 MX</h4>
          </div>
        </section>
      </article>
      <button className="btn-bill" onClick={handleAsientos}>
        Seleccionar Asientos
      </button>
    </section>
  );
};

export default Bill;
