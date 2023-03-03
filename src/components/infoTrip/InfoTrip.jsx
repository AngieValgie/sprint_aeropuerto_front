import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Bill from "../billing/Bill";
import HorariosDisponibles from "../horariosDisponibles/HorariosDisponibles";
import "./infoTrip.scss";
import SecAsientos from "../secAsientos/SecAsientos";
import { getInfoLocal } from "../../services/infolocal";
import { getDataVuelos } from "../../services/getDataVuelos";

export const infoVuelo = createContext({});

const InfoTrip = () => {
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

  const horarios = [
    {
      salida: "8:00 am",
      llegada: "6:45 pm",
      id: 0,
    },
    {
      salida: "7:00 pm",
      llegada: "5:45 am",
      id: 1,
    },
  ];

  const { vuelos } = useParams();
  const [localInfo, setlocalInfo] = useState(getInfoLocal());
  const [seleccion, setseleccion] = useState({ salida: "", regreso: "" });
  const [vuelosSalida, setvuelosSalida] = useState();
  const [vuelosRegreso, setvuelosRegreso] = useState();

  useEffect(() => {
    getDataVuelos().then((response) => {
      console.log(localInfo);
      console.log(response);
      if (Object.entries(localInfo).lenght !== 0) {
        const vuelosS = response.filter(
          (vuelo) =>
            vuelo.placeIn === localInfo.placeIn &&
            vuelo.placeOut === localInfo.placeOut
        );
        setvuelosSalida(vuelosS);
        const vuelosR = response.filter(
          (vuelo) =>
            vuelo.placeIn === localInfo.placeOut &&
            vuelo.placeOut === localInfo.placeIn
        );
        setvuelosRegreso(vuelosR);
      }
    });
  }, []);

  /*useEffect(() => {
    console.log(vuelosSalida);
    console.log(vuelosRegreso);
  }, [vuelosSalida, vuelosRegreso]);*/

  const handleClick = (name, value) => {
    setseleccion({ ...seleccion, [name]: value });
  };

  return (
    <infoVuelo.Provider
      value={{
        localInfo,
        seleccion,
        precio,
        horarios,
        vuelosRegreso,
        vuelosSalida,
      }}
    >
      <section className="SecInfoTrip">
        {vuelos === "Horarios" ? (
          <>
            <section className="SecInfoTrip__flights">
              <HorariosDisponibles
                vuelo="salida"
                seleccion={seleccion}
                handleClick={handleClick}
              />
              {localInfo?.dateOut !== "" ? (
                <HorariosDisponibles
                  vuelo="regreso"
                  seleccion={seleccion}
                  handleClick={handleClick}
                />
              ) : (
                ""
              )}
            </section>
          </>
        ) : vuelos === "Asientos" ? (
          <section className="SecInfoTrip__flights">
            <SecAsientos vuelo="salida" />
          </section>
        ) : (
          ""
        )}
        <section className="SecInfoTrip__billing">
          <Bill
            origen={localInfo.placeIn}
            destino={localInfo.placeOut}
            regreso={localInfo?.dateOut}
            salida={localInfo.dateIn}
            seleccion={seleccion}
          />
        </section>
      </section>
    </infoVuelo.Provider>
  );
};

export default InfoTrip;
