import React, { createContext, useEffect, useState } from "react";
import { getInfoLocal } from "../../services/infolocal";
import FormMain from "../Form/FormMain";
import ImgHeader from "../imgHeader/ImgHeader";
import ModalTravel from "../modalTravel/ModalTravel";
import SecPagos from "../seccionPagos/SecPagos";
import Services from "../servicesFooter/Services";
import "./stylesHome.scss";

export const HomeContext = createContext({});

const Home = () => {
  const [formData, setFormData] = useState({
    placeIn: "",
    placeOut: "",
    dateIn: "",
    dateOut: "",
    pasajeros: "",
    cantPasajeros: 0,
    codprom: "",
  });
  const [travelOpcion, setTravelOpcion] = useState(false);
  const [dateOut, setDateOut] = useState("");
  const [opTravel, setOpTravel] = useState(0);
  const [opPlace, setOpPlace] = useState(0);

  const changeOpcionTravel = () => {
    setTravelOpcion(!travelOpcion);
  };

  const ChangeDataForm = (target) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const changeOpCalendar = (opcion) => {
    setOpTravel(opcion);
  };

  const changeOplace = (opcion) => {
    setOpPlace(opcion);
  };

  const changeDateOut = (date) => {
    setDateOut(date);
  };

  const [showModal, setshowModal] = useState(false);
  const [OpenModal, setOpenModal] = useState(0);
  const hiddeModal = () => {
    setshowModal(!showModal);
  };
  const changeOpcionModal = (opcion) => {
    setOpenModal(opcion);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    const getLocal = getInfoLocal();
    if (Object.entries(getLocal).length !== 0) {
      setFormData(getLocal);
      console.log(getLocal);
    }
  }, []);

  return (
    <HomeContext.Provider
      value={{
        showModal,
        hiddeModal,
        changeOpcionModal,
        OpenModal,
        ChangeDataForm,
        setFormData,
        changeOpcionTravel,
        changeOpCalendar,
        changeOplace,
        changeDateOut,
        dateOut,
        travelOpcion,
        opTravel,
        opPlace,
        formData,
      }}
    >
      <ModalTravel data={formData} />
      <main className="SecMainHeader">
        <FormMain classPosition={"positionForm"} data={formData} />
        <ImgHeader classHidden={"hiddenImage"} />
      </main>
      <section className="secInformationLanding">
        <SecPagos />
      </section>
      <section>
        <Services />
      </section>
    </HomeContext.Provider>
  );
};

export default Home;
