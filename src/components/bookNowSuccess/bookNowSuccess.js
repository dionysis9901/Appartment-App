import React from "react";

const BookNowSuccess = ({
  price,
  nights,
  originalPrice,
  discount,
  discountPercent,
  priceWithDiscount,
  booked,
}) => (
  <>
    <p className="bookNow__success__originalPrice">
      <span className="left">
        €{price} X {nights} nights
      </span>
      <span className="right">€{originalPrice}</span>
    </p>
    <p className="bookNow__success__discount">
      <span className="left"> {discountPercent}% Discount </span>
      <span className="right">-€{discount}</span>
    </p>

    <p className="bookNow__success__finalPrice">
      <span className="left">
        €{originalPrice} - €{discount}
      </span>
      <span className="right">Total:€{priceWithDiscount}</span>
    </p>

    <button
      onClick={booked}
      className="bookNow__success__continueBtn btn--blue"
    >
      Continue
    </button>
  </>
);

export default BookNowSuccess;
