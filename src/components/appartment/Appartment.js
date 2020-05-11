import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Moment from "react-moment";
import BookNow from "../bookNow";
import AppartmentDetails from "../appartmentDetails";

import { GrView } from "react-icons/gr";
import { FcCheckmark } from "react-icons/fc";

import { getAvailable, resetState } from "../../actions";

import "react-datepicker/dist/react-datepicker.css";
import "./appartment.scss";

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
  const dispatch = useDispatch();

  const formated = (date) => date.toISOString().slice(0, 10).replace(/-/g, "");

  const [ui, setUi] = useState({
    details: false,
    bookNow: false,
    guests: 1,
    startDate: new Date("2020/05/09 GMT"),
    endDate: new Date("2020/05/19 GMT"),
    booked: false,
  });

  if (ui.booked) {
    return (
      <div className="appartment">
        <img className="appartment__image" src={image} alt="Appartment" />
        <div className="appartment__success__icon">
          <FcCheckmark />
        </div>
        <p className="appartment__title__booked">
          You have successfully booked:{title}
        </p>
        <p className="appartment__checkIn">
          Check-in: <Moment format="YYYY/MM/DD">{ui.startDate}</Moment>
        </p>
        <p className="appartment__checkOut">
          Check-out: <Moment format="YYYY/MM/DD">{ui.endDate}</Moment>
        </p>
      </div>
    );
  }

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
        booked={() => setUi({ ...ui, booked: true })}
      />
    );
  }

  return (
    <div className="appartment">
      <img className="appartment__image" src={image} alt="Appartment" />
      <p className="appartment__title">{title}</p>

      <button
        className="appartment__viewBtn"
        onClick={() => setUi({ ...ui, details: !ui.details })}
      >
        <GrView />
      </button>

      <div
        className="appartment__details"
        style={{ display: ui.details ? "block" : "none" }}
      >
        <AppartmentDetails
          price={price}
          maxpeople={maxpeople}
          bedrooms={bedrooms}
          bathrooms={bathrooms}
          amenities={amenities}
          bookNowFunc={() => {
            dispatch(resetState());
            return setUi({ ...ui, bookNow: true });
          }}
        />
      </div>
    </div>
  );
};

export default Appartment;
