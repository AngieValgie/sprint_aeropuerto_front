import ReactDOM from "react-dom/client";
import Bill from "./components/billing/Bill";
import CardHorario from "./components/cardHorario/CardHorario";
import FormMain from "./components/Form/FormMain";
import Home from "./components/home/Home";
import HorariosDisponibles from "./components/horariosDisponibles/HorariosDisponibles";
import IconEquipaje from "./components/iconEquipaje/IconEquipaje";
import InfoTrip from "./components/infoTrip/InfoTrip";
import ModalTravel from "./components/modalTravel/ModalTravel";
import "./main.scss";
import Router from "./routes/Router";
import "./vars.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
