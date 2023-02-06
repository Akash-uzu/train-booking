import React from "react";
const RenderSeats = () => {
  let bookedSeats = JSON.parse(localStorage.getItem("bookedseats")) || [];
  let seats = [];
  let total = localStorage.getItem("totalseats")

  
  for (let i = 0; i < total; i++) {
    seats.push(
        <div
        key={i + 1}
        style={{
            width: "50px",
            height: "50px",
            border: "1px solid gray",
            display: "inline-block",
            textAlign: "center",
            margin: "5px",
            borderRadius: "8px",
            backgroundColor: bookedSeats[i] ? "lightgreen" : "white"
          }}
      >
        {bookedSeats[i] ? bookedSeats[i].age : i + 1}
      </div>    );
  }

  return seats
};
export default RenderSeats