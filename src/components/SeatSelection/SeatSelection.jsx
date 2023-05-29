import React from "react";
import LivingIcon from '@mui/icons-material/Living';
import Seats from "./Seats";
import { ColorSeat, SeatsSelection } from "./StyleSeatSelection";

const SeatSelection = () => {
  return (
    <SeatsSelection>
      <section>
      <h2>Vuelo de salida</h2>
      <h3>Martes 30 nov 2021</h3>
      <h5>Cd. Mex (AICM) a Culiacán</h5>
      </section>
      <ColorSeat>
        <h6>Selecciona tus asientos</h6>
        <div>
         <LivingIcon sx={{ color:"#9b2577"}}/>
         <span>Seleccionado</span>
        </div>
        <div>
         <LivingIcon sx={{ color:"#747374"}}/>
         <span>Ocupado</span>
        </div>
        <div>
         <LivingIcon/>
         <span>Disponible</span>
        </div>
      </ColorSeat>
      <div>
      <Seats/>
      </div>
    </SeatsSelection>
  );
};

export default SeatSelection;
