import React from "react";
import "./bookNow.scss";
import DatePicker from "react-datepicker";

const BookNow = ({
  deleteBtn,
  price,
  startDate,
  endDate,
  guests,
  changeStartDate,
  changeEndDate,
  changeGuestsNum,
  getAvailability,
}) => {
  return (
    <div className="bookNow">
      <button onClick={deleteBtn} className="bookNow__deleteBtn">
        X
      </button>
      <p className="bookNow__price">
        € <span className="bookNow__price__bold">{price}</span> / night
      </p>
      <form className="bookNow__form">
        <p className="bookNow__form__dateLabelStart">From</p>

        <DatePicker
          selected={startDate}
          onChange={changeStartDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="bookNow__form__dateStart"
          popperPlacement="top-end"
          popperModifiers={{
            preventOverflow: {
              enabled: true,
              escapeWithReference: false,
              boundariesElement: "viewport",
            },
          }}
        />

        <p className="bookNow__form__dateLabelEnd">To</p>

        <DatePicker
          selected={endDate}
          onChange={changeEndDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          popperModifiers={{
            preventOverflow: {
              enabled: true,
              escapeWithReference: false,
              boundariesElement: "viewport",
            },
          }}
          className="bookNow__form__dateEnd"
        />

        <p className="bookNow__form__guestLabel">Guests</p>
        <input
          type="number"
          value={guests}
          onChange={changeGuestsNum}
          className="bookNow__form__guestInput"
        />
        <button
          onClick={getAvailability}
          className="bookNow__form__seeAvailable"
          type="button"
        >
          See available
        </button>
      </form>
    </div>
  );
};

export default BookNow;
