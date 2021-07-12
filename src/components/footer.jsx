import React from "react";

const Footer = () => {

  const today = new Date();

  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Copyright Natalia Swiercz, {today.getFullYear()}
        </p>

        <a href="https://github.com/Nataliasw" target="_blank" className="footer__link"><i className="footer__icon--1 fab fa-github-square"></i></a>
        <a href="https://www.linkedin.com/in/natalia-%C5%9Bwiercz-2bb66719b/" target="_blank" className="footer__link"><i className="footer__icon--2 fab fa-linkedin"></i></a>

      </div>
    </div>
  )
};


export default Footer;