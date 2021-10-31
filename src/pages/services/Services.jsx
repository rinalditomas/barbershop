import React from "react";
import { PAGES } from "../../config/text";
import "./Services.css";

const Services = () => {
    const {img,title,subtitle,prices1,prices2,prices3,prices4,action} =PAGES.SERVICES
  return (
    <div className="services-container">
      <div className="services-information">
        <h1 className='title-services'>{title}</h1>
        <p className='subtitle-services'>{subtitle}</p>
        <p className='prices'>{prices1}</p>
        <p className='prices'>{prices2}</p>
        <p className='prices'>{prices3}</p>
        <p className='prices'>{prices4}</p>
        <button className='button'><p>{action}</p></button>
      </div>
      <div className="services-image">
          <img src={img} alt={PAGES.NOTFOUND} />
          <div className="rectangle here"></div>
      </div>
    </div>
  );
};

export default Services;
