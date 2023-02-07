import React from "react";
const RenderSeats = ({render}) => {

  
  // let seatsData = JSON.parse(localStorage.getItem("seatsData")) || [];
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
            backgroundColor: render[i].status ==='booked' ? "lightgreen" : "white"
          }}
      >
        {i+1}
      </div>);
  }

  return seats
};
export default RenderSeats