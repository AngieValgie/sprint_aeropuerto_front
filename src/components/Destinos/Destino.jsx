import React, { useContext } from "react";
import "./destino.scss";
import DatalistInput, { useComboboxControls } from "react-datalist-input";
import { listTravel } from "../../services/InfoDataList";
import { HomeContext } from "../home/Home";

const Destino = () => {
  const { setValue, value } = useComboboxControls({
    initialValue: "",
  });
  const handleSelect = () => {};
  const list = listTravel;
  const { hiddeModal, ChangeDataForm, opPlace } = useContext(HomeContext);

  const selectOptionList = (item) => {
    opPlace === 0
      ? ChangeDataForm({ name: "placeIn", value: item })
      : ChangeDataForm({ name: "placeOut", value: item });
    console.log(item);
    hiddeModal();
  };

  return (
    <article className={`SecTravelList`}>
      <div className="SecHeaderModalTravel">
        <h3>¿A donde viajas?</h3>
        <span className="material-symbols-outlined" onClick={hiddeModal}>
          close
        </span>
      </div>
      <span className="material-symbols-outlined iconSearch">search</span>
      <DatalistInput
        placeholder="Selecciona tu destino"
        value={value}
        setValue={setValue}
        onSelect={(item) => {
          setValue("");
          selectOptionList(item.value);
        }}
        items={list}
      />
    </article>
  );
};

export default Destino;
