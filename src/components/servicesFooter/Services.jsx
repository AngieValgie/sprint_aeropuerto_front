import React from "react";
import "./services.scss";
const Services = () => {
  return (
    <div className="services">
      <h1>Servicios disponibles</h1>
      <section className="services__container">
        <article className="services__elem">
          <span className="material-symbols-outlined services__icons">directions_car</span>
          <h2 className="services__h2">Transporte</h2>
          <p className="services__p">Renta un auto o reserva un shuttle</p>
        </article>

        <article className="services__elem">
          <span className="material-symbols-outlined services__icons">flight_takeoff</span>
          <h2 className="services__h2">
            Vuelos + <br /> Hoteles
          </h2>
          <p className="services__p">
            Encuentra las mejores ofertas para tu viaje
          </p>
        </article>

        <article className="services__elem">
          <span className="material-symbols-outlined services__icons">diversity_1</span>
          <h2 className="services__h2">Grupos</h2>
          <p className="services__p">
            Obten una cotización para grupos de más de 9 personas.
          </p>
        </article>

        <article className="services__elem">
          <span className="material-symbols-outlined services__icons">king_bed</span>
          <h2 className="services__h2">Hoteles</h2>
          <p className="services__p">
            Reserva cualquier habitación en cualquier parte del mundo.
          </p>
        </article>

        <article className="services__elem">
          <span className="material-symbols-outlined services__icons">local_mall</span>
          <h2 className="services__h2">Carga</h2>
          <p className="services__p">
            Contamos con servicio de carga mensajería.
          </p>
        </article>
      </section>
    </div>
  );
};
export default Services;
