import React, { useState } from "react";
//import Seat from "./Seat";
import RenderSeats from "./SeatsMatrix";
import "./Passengers.css";

const Passenger = () => {
  const bookedAgent = localStorage.getItem("currentagent");
  const passengerData = JSON.parse(localStorage.getItem("passengerData"));
  const totalseats = JSON.parse(localStorage.getItem("totalseats"));
  const [render,setRender] = useState(JSON.parse(localStorage.getItem("seatsData")) || [])

  let seatsData = JSON.parse(localStorage.getItem("seatsData")) || [];
  let seats = [];
  if (seatsData.length === 0 || null) {
    for (let i = 1; i <= totalseats; i++) {
      let type =
        (i % 6) - 1 === 0 || i % 6 === 0
          ? "window"
          : (i % 6) - 2 === 0 || i % 6 === 5
          ? "middle"
          : "aisle";
      seats = [
        ...seats,
        {
          seatNo: i,
          pname: "name",
          status: "available",
          type: type,
          bookedBy: null,
        },
      ];
    }
    localStorage.setItem("seatsData", JSON.stringify(seats));
    console.log(seats);
  } else {
    localStorage.setItem("seatsData", JSON.stringify(seatsData));
    console.log(seatsData);
  }

  const allocateSeats = () => {
    passengerData.forEach((passenger) => {

      if (passenger.age >= 60) {
        //// All 60+ age condition
        if (passenger.sex === "female") {
          // female preference
          let windowSeat = seatsData.find(
            (seat) => seat.type === "window" && seat.status === "available"
          );
          if (windowSeat) {
            windowSeat.pname = passenger.name;
            windowSeat.status = "booked";
            windowSeat.bookedBy = passenger;
            console.log("ran");
          } else {
            let middleSeat = seatsData.find(
              (seat) =>
                seat.type === "middle" && seat.status === "available"
            );
            if (middleSeat) {
              middleSeat.pname = passenger.pname;
              middleSeat.status = "booked";
              middleSeat.bookedBy = passenger;
            }
          }
        } else {
          // male seats
          let windowSeat = seatsData.find(
            (seat) => seat.type === "window" && seat.status === "available"
          );
          if (windowSeat) {
            windowSeat.pname = passenger.name;
            windowSeat.status = "booked";
            windowSeat.bookedBy = passenger;
            console.log("ran");
          } else {
            let middleSeat = seatsData.find(
              (seat) =>
                seat.type === "middle" && seat.status === "available"
            );
            if (middleSeat) {
              middleSeat.pname = passenger.pname;
              middleSeat.status = "booked";
              middleSeat.bookedBy = passenger;
            }
          }
        }
      } else {
        /// prefering accordingly, so that 60+ can get window seats and middle seats
        //  preferences:
        //  aise 1
        //  middle 2
        //  window 3
        const aisle = seatsData.find(function (seat) {
          return seat.type === "aisle" && seat.status === "available";
        });
        if (aisle) {
          aisle.pname = passenger.pname;
          aisle.status = "booked";
          aisle.bookedBy = passenger;
        } else {
          const middle = seatsData.find(
            (seat) => seat.type === "middle" && seat.status === "available"
          );
          if (middle) {
            middle.pname = passenger.pname;
            middle.status = "booked";
            middle.bookedBy = passenger;
          } else {
            // check for any other available seats
            const availableSeat = seatsData.find(
              (seat) => seat.status === "available"
            );
            if (availableSeat) {
              availableSeat.pname = passenger.pname;
              availableSeat.status = "booked";
              availableSeat.bookedBy = passenger;
            } else {
              alert("seats unavailable");
            }
          }
        }
      }
      


    });
    //function to check diff gender
    // localStorage.setItem("seatsData",JSON.stringify(seatsData))

    const checkGender=() => {
      for (let i = 1; i < seatsData - 1; i++) {
        if (
          seatsData[i].bookedBy.bookedAgent !==
            seatsData[i - 1].bookedBy.bookedAgent ||
          seatsData[i].bookedBy.bookedAgent !==
            seatsData[i + 1].bookedBy.bookedAgent
        ) {
          if (
            seatsData[i].bookedBy.sex === seatsData[i - 1].bookedBy.sex ||
            seatsData[i].bookedBy.sex === seatsData[i + 1].bookedBy.sex
          ) {
            return true;
          }
        }
      }
    }
    console.log(checkGender())
    if(checkGender()===true){
      alert("Warning! Opposite Gender Passengers");
    }else{
      localStorage.setItem("seatsData",JSON.stringify(seatsData))
      setRender(seatsData)

    }

  };

  return (
    <div className="totalseats-container">
     
      <br />
      <br />
      <div className="render-seats">
        <RenderSeats render={render} />
      </div>
      <button onClick={allocateSeats}>Allocate Seat</button>
    </div>
  );
};
export default Passenger;
