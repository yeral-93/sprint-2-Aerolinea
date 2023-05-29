import React from 'react'
// import { DivSeats } from './StyleSeats';
import LivingIcon from '@mui/icons-material/Living';
import { DivSeats } from './StyleSeats';

const Seats = () => {

    const seat =[];
    const rows = 20;
    const columns =6;

    for(let index = 0; index < rows; index++){
        const arrayRows = [];
       for (let position = 0; position < columns; position++){
        const codeSeat =`${String.fromCharCode(65 + index)}${position+1}`;
        arrayRows.push(<LivingIcon key={codeSeat}/>)
       } 

       seat.push(<div key={index}>{arrayRows}</div>);
    }
    

  return (
    <DivSeats>{seat}</DivSeats>
    )
};

export default Seats;