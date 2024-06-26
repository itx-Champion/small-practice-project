import React from "react";
import "./Loader-Newton.css";
const LoaderNewton = () => {
  return (
    <section className="Loader-newton">
      <section className="loader-wrapper">
      <p className="project-name">Loader</p>
        <div class="loader"></div>
      </section>
      <section className="newton-wrapper">
      <p className="project-name">Newton</p>
        <div class="newton">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </section>
  );
};

export default LoaderNewton;
