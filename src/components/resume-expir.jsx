import React, { useState } from "react";

const Expirence = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(prevValue => {
      return !prevValue
    })
  };

  return (
    <div className="edu" >
      <div>
        <h2 className="heading-2 expir__heading">Employment History</h2>
        <button className="about__button" onClick={handleClick}><i className={click ? "about__icon--up fas fa-angle-double-down" : "about__icon--down fas fa-angle-double-down"}
        ></i></button>
      </div>

      {click && <div >
        <div className="expir__container">
          <div className="expir__job">
            <span className="expir__date"><i className="fas fa-caret-right"></i>  Warsaw 03.2020-11.2020</span>
            <h3 className="expir__title">Customer Manage Exchange Serivce Specialist at CHEP Polska </h3>
            <ul className=" expir__list">
              <li className="expir__item">
                Managing customer accounts (medium and large companies from FMCG sector) and maintaining every contact with clients.
              </li>
              <li className="expir__item">
                Processing and analizing data related to pallets pooling and its cost, authoring and presenting reports and presentations.
              </li>
              <li className="expir__item">
                Analizing customer invoices in terms of their corectness.
              </li>
            </ul>
          </div>
          <div className="expir__job">
            <span className="expir__date"> <i className="fas fa-caret-right"></i> Debska Wola 08.2018 - 09.2018 and 07.2019 - 08.2019</span>
            <h3 className="expir__title"> Technology Department InternMidroc Alucrom </h3>

            <ul className="expir__list">
              <li className="expir__item">
                Participating in quality control and quality managment systems courses.
              </li>
              <li className="expir__item">
                Perfoming administrative duties.
              </li>
            </ul>
          </div>
          <div className="expir__job">
            <span className="expir__date"> <i className="fas fa-caret-right"></i> Poznan 12.2017 - 10.2018</span>

            <h3 className="expir__title">Sales Assistant at New Look Polska</h3>

            <ul className="expir__list">
              <li className="expir__item">
                Cash register and convoy handling, prepering deliveries and necessary documents.
              </li>
            </ul>
          </div>

          <div className="expir__job">
            <span className="expir__date"> <i className="fas fa-caret-right"></i> Scotland 06.2016 - 09.2016  and 07.2017 - 09.2017</span>
            <h3 className="expir__title">Food and Beverage Assistant Hilton Worldwide Hotels</h3>

          </div>

        </div>


      </div>}
    </div>

  )


};


export default Expirence;