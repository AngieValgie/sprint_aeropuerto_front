import React, { useContext } from "react";
import Calendario from "../calendario/Calendario";
import Destino from "../Destinos/Destino";
import { HomeContext } from "../home/Home";
import ModalPasajeros from "../modalPasajeros/ModalPasajeros";
import "./stylesModalTravel.scss";

const ModalTravel = ({ data }) => {
  const { showModal, OpenModal } = useContext(HomeContext);

  return (
    <section
      className={`SecModalTravel ${showModal === false ? "hidden" : ""}`}
    >
      {OpenModal === 1 ? (
        <Destino />
      ) : OpenModal === 2 ? (
        <Calendario />
      ) : (
        <ModalPasajeros data={data} />
      )}
    </section>
  );
};

export default ModalTravel;
