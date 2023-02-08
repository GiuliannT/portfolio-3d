import React from "react";

export const Home = () => {
  return (
    <section id="home">
      <h1 className="home_title">Giuliano Conti</h1>
      <p className="home_text">React Developer</p>
      <a className="home_btn" href="Giuliano_Conti_CV.pdf" download>
        <svg width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M8.75 1.75a.75.75 0 00-1.5 0v6.59L5.3 6.24a.75.75 0 10-1.1 1.02L7.45 10.76a.78.78 0 00.038.038.748.748 0 001.063-.037l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V1.75z" />
          <path d="M1.75 9a.75.75 0 01.75.75v3c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3A2.25 2.25 0 0112.75 15h-9.5A2.25 2.25 0 011 12.75v-3A.75.75 0 011.75 9z" />
        </svg>
        <p className="home_btn_text">Descargar CV</p>
      </a>
    </section>
  );
};
