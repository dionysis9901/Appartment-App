import React, { useState } from "react";
import "./appartment.scss";
import { GrView } from "react-icons/gr";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Appartment = ({
  title,
  price,
  amenities,
  bathrooms,
  bedrooms,
  image,
  maxpeople,
  getPrice,
  nid,
}) => {
  const [config, setConfig] = useState({
    details: false,
    bookNow: false,
    value: "",
  });
  const [startDate, setStartDate] = useState(new Date("2020/04/09"));
  const [endDate, setEndDate] = useState(new Date("2020/05/09"));

  if (config.bookNow) {
    return (
      <div className="bookNow">
        <button
          onClick={() => setConfig({ ...config, bookNow: false })}
          className="bookNow__deleteBtn"
        >
          X
        </button>
        <p className="bookNow__price">
          € <span className="bookNow__price__bold">{price}</span> / night
        </p>
        <form className="bookNow__form">
          <p className="bookNow__form__dateLabelStart"> From </p>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="bookNow__form__dateStart"
          />

          <p className="bookNow__form__dateLabelEnd"> To </p>

          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="bookNow__form__dateEnd"
          />
          <p className="bookNow__form__guestLabel">Guests</p>
          <input
            type="number"
            value={config.value}
            onChange={(event) =>
              setConfig({ ...config, value: event.target.value })
            }
            className="bookNow__form__guestInput"
          />
          <button className="bookNow__form__seeAvailable">See available</button>
        </form>
      </div>
    );
  }

  if (config.details) {
    return (
      <div className="appartmentUncensored">
        <img className="appartment__image" src={image} alt="Appartment" />

        <p className="appartment__title">{title}</p>

        <button
          className="appartment__btn"
          onClick={() => setConfig({ ...config, details: false })}
        >
          <GrView />
        </button>

        <p className="appartment__price">From {price} € / night</p>
        <p className="appartment__mainInfo">
          {maxpeople} Guests • {bathrooms} Bathroom • {bedrooms} Bedrooms
        </p>
        <p className="appartment__amenities">{amenities}</p>

        <button
          className="appartment__bookNowBtn"
          onClick={() => setConfig({ ...config, bookNow: true })}
        >
          Book Now
        </button>
      </div>
    );
  }

  return (
    <div className="appartment">
      <img className="appartment__image" src={image} alt="Appartment" />
      <p className="appartment__title">{title}</p>

      <button
        className="appartment__btn"
        onClick={() => setConfig({ ...config, details: true })}
      >
        <GrView />
      </button>
    </div>
  );
};

export default Appartment;
