import React from "react";
import "./show.css";

const Show = () => {
  return (
    <section className="show">
      <div className="container show__container">
        <div class="show__details">
          <h2>800</h2>
          <p>
            Completed
            <br></br>Projects
          </p>
        </div>
        <div class="show__details">
          <h2>1800</h2>
          <p>
            Satisfied
            <br></br>Customers
          </p>
        </div>
        <div class="show__details">
          <h2>145</h2>
          <p>
            Partners
            <br></br>worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Show;
