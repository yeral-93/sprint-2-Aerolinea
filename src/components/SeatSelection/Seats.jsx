import React from "react";
import { DivSeats } from "./StyleSeats";


const Seats = () => {
  const seat = [];
  const rows = 10;
  const columns = 7;

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const arrayRows = [];
    const rowNumber = rowIndex + 1;

    for (let colIndex = 0; colIndex < columns; colIndex++) {
      const isSpecialColumn = colIndex === 3;
      const columnLetter = String.fromCharCode(65 + colIndex - (colIndex > 3 ? 1 : 0));
      const seatCode = `${columnLetter}${rowNumber}`;

      arrayRows.push(
        <button
          key={colIndex}
          style={{
            marginRight: "8px",
            marginTop: "8px",
            width: "40px",
            height: "40px",
            borderRadius: "3px",
            marginBottom: "5px",
            color: "#bbbbbb",
            backgroundColor: isSpecialColumn ? "#ffffff" : "#b5b5b5",
          }}
        >
          {isSpecialColumn ? rowNumber : seatCode}
        </button>
      );
    }

    seat.push(<div key={rowIndex}>{arrayRows}</div>);

    // Insertar <h5> centrado entre la fila 5 y 6
    if (rowIndex === 4) {
      seat.push(
        <div key="h5" style={{ display: "flex", justifyContent: "center"}}>
          <h5>Estándar</h5>
        </div>
      );
    }
  }

  return <DivSeats>{seat}</DivSeats>;
};

export default Seats;


