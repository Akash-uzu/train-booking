import React from "react";
//import Seat from "./Seat";
import RenderSeats from "./SeatsMatrix";
import "./Passengers.css";

const Passenger = () => {
  const bookedAgent = localStorage.getItem("currentagent");
  const passengers = JSON.parse(localStorage.getItem("passengerData"));
  const totalseats = JSON.parse(localStorage.getItem("totalseats"));
  let seatsData = JSON.parse(localStorage.getItem("seatsData")) || []
  let seats = []
  console.log(passengers)
  if(seatsData.length===0 || null){
    if (seatsData.length ===0){
      for (let i = 1; i <= totalseats; i++) {
        let category =
          i % 6 === 0 || i % 6 === 5
            ? "window"
            : i % 6 === 1 || i % 6 === 4
            ? "middle"
            : "aisle";
        seats =  [
          ...seats,
          {
            seatNo: i,
            pname: "name",
            status: "available",
            category: category,
            bookedBy: bookedAgent,
          },
        ];
      }
      localStorage.setItem("seatsData", JSON.stringify(seats));
    }
    

  }

  const allocateSeats = () => {

    passengers.forEach((passenger) => {
      if (passenger.age >= 60) {
        let windowSeat = seatsData.find(
          (seat) => seat.category === "window" && seat.status === "available"
        );
        if (windowSeat) {
          windowSeat.status = "booked";
          windowSeat.bookedBy = passenger;
          console.log("ran")
        } else {
          let middleSeat = seatsData.find(
            (seat) => seat.category === "middle" && seat.status === "available"
          );
          if (middleSeat) {
            middleSeat.status = "booked";
            middleSeat.bookedBy = passenger;
          }
        }
      } else {
        if (passenger.sex === "female") {
          console.log("sssssssssssssssssssssss");
          const windowSeat = seatsData.find(function (seat) {
            return seat.category === "window" && seat.status === "available";
          });
          if (windowSeat) {
            windowSeat.status = "booked";
            windowSeat.bookedBy = passenger;
          } else {
            const middleSeat = seatsData.find(
              (seat) =>
                seat.category === "middle" && seat.status === "available"
            );
            if (middleSeat) {
              console.log("femlee");
              middleSeat.status = "booked";
              middleSeat.bookedBy = passenger;
            } else {
              const aisleSeat = seatsData.find(
                (seat) =>
                  seat.category === "aisle" && seat.status === "available"
              );
              if (aisleSeat) {
                aisleSeat.status = "booked";
                aisleSeat.bookedBy = passenger;
              } else {
                const aisleSeat = seatsData.find(
                  (seat) =>
                    seat.category === "aisle" && seat.status === "available"
                );
                if (aisleSeat) {
                  aisleSeat.status = "booked";
                  aisleSeat.bookedBy = passenger;
                } else {
                  // check for any other available seats
                  const availableSeat = this.seatsData.find(
                    (seat) => seat.status === "available"
                  );
                  if (availableSeat) {
                    availableSeat.status = "booked";
                    availableSeat.bookedBy = passenger;
                  } else {
                    console.log("No seats available for booking");
                  }
                }
              }
            }
          }
        }
      }
    });
    localStorage.setItem("seatsData",JSON.stringify(seatsData))
  };

  //   if (age >= 60) {//window seat allocation
  //     for (let i = 1; i <= totalseats; i++) {
  //       if (i % 6-1 === 0 || i % 6 === 0) {
  //         if (!bookedSeats[i]) {
  //           bookedSeats[i-1] = { age, sex, bookedAgent };
  //           setSeat(i + 1);
  //           localStorage.setItem("bookedseats", JSON.stringify(bookedSeats));
  //           console.log(bookedSeats);
  //           break;
  //         }
  //       }
  //     }
  //   } else {// middle seat allocation if no window seat
  //     for (let i = 1; i <= totalseats; i++) {
  //       if (i % 6-2 === 0 || i % 6 === 5) {
  //         if (!bookedSeats[i]) {
  //           bookedSeats[i] = { age, sex, bookedAgent };
  //           setSeat(i + 1);
  //           localStorage.setItem("bookedseats", JSON.stringify(bookedSeats));
  //           break;
  //         }
  //       } else {
  //         for (let i = 1; i <= totalseats; i++) {
  //           if (i % 6-3 === 0 || i % 6 === 4) {
  //             if (!bookedSeats[i]) {
  //               bookedSeats[i] = { age, sex, bookedAgent };
  //               setSeat(i + 1);
  //               localStorage.setItem(
  //                 "bookedseats",
  //                 JSON.stringify(bookedSeats)
  //               );
  //               break;
  //             } else {
  //               if (
  //                 bookedSeats[i].bookedAgent === bookedAgent &&
  //                 !(
  //                   (bookedSeats[i-1] && bookedSeats[i+1].sex !== sex) ||
  //                   (bookedSeats[i + 1] && bookedSeats[i + 1].sex !== sex)
  //                 )
  //               ) {
  //                 bookedSeats[i + 2] = { age, sex, bookedAgent };
  //                 setSeat(i + 2);
  //                 localStorage.setItem(
  //                   "bookedseats",
  //                   JSON.stringify(bookedSeats)
  //                 );
  //                 break;
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // };

  return (
    <div className="totalseats-container">
      <button onClick={allocateSeats}>Allocate Seat</button>
      <br />
      <br />
      {/* <Seat seat={seat} /> */}
      <div className="render-seats">
        <RenderSeats />
      </div>
    </div>
  );
};
export default Passenger;
