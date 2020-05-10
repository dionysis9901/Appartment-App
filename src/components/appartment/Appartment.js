import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GrView } from "react-icons/gr";

import "react-datepicker/dist/react-datepicker.css";
import "./appartment.scss";
import BookNow from "../bookNow";
import { getAvailable } from "../../actions";

const Appartment = ({
  title,
  price,
  amenities,
  bathrooms,
  bedrooms,
  image,
  maxpeople,
  nid,
}) => {
  const [ui, setUi] = useState({
    details: false,
    bookNow: false,
    guests: 1,
    startDate: new Date("2020/05/09 GMT"),
    endDate: new Date("2020/05/19 GMT"),
  });

  const dispatch = useDispatch();
  const formated = (date) => date.toISOString().slice(0, 10).replace(/-/g, "");

  if (ui.bookNow) {
    return (
      <BookNow
        price={price}
        startDate={ui.startDate}
        endDate={ui.endDate}
        guests={ui.guests}
        deleteBtn={() => setUi({ ...ui, bookNow: false })}
        changeStartDate={(date) => {
          setUi({ ...ui, startDate: date });
        }}
        changeEndDate={(date) => {
          setUi({ ...ui, endDate: date });
        }}
        changeGuestsNum={(event) =>
          setUi({ ...ui, guests: event.target.value })
        }
        getAvailability={() =>
          dispatch(
            getAvailable(
              nid,
              formated(ui.startDate),
              formated(ui.endDate),
              ui.guests
            )
          )
        }
      />
    );
  }

  if (ui.details) {
    return (
      <div className="appartmentUncensored">
        <img className="appartment__image" src={image} alt="Appartment" />

        <p className="appartment__title">{title}</p>

        <button
          className="appartment__btn"
          onClick={() => setUi({ ...ui, details: false })}
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
          onClick={() => setUi({ ...ui, bookNow: true })}
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
        onClick={() => setUi({ ...ui, details: true })}
      >
        <GrView />
      </button>
    </div>
  );
};

export default Appartment;
