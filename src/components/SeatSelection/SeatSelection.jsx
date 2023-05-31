import React from "react";
import Seats from "./Seats";
import {
  BoxSeats,
  ColorSeat,
  Exit,
  Letter,
  SeatsSelection,
} from "./StyleSeatSelection";
import { Flex, Button, Box, Text } from "@chakra-ui/react";
import Reservation from "../FlightSearch/Reservation";

const SeatSelection = () => {
  return (
    <SeatsSelection>
      <BoxSeats>
        <section>
          <h2>Vuelo de salida</h2>
          <h3>Martes 30 nov 2021</h3>
          <h5>Cd. Mex (AICM) a Culiacán</h5>
        </section>
        <ColorSeat>
          <h6>Selecciona tus asientos</h6>
        </ColorSeat>
        <div>
          <Letter>
            <div>
              <span>A</span>
              <span>B</span>
              <span>C</span>
            </div>
            <div>
              <span>D</span>
              <span>E</span>
              <span>F</span>
            </div>
          </Letter>
          <Exit>Salida rápida</Exit>
          <Seats />
        </div>
        <section>
          <h2>Vuelo de regreso</h2>
          <h3>Miercoles 8 dic 2021</h3>
          <h5>Culiacán a Cd. Mex (AICM)</h5>
        </section>
        <div>
          <Letter>
            <div>
              <span>A</span>
              <span>B</span>
              <span>C</span>
            </div>
            <div>
              <span>D</span>
              <span>E</span>
              <span>F</span>
            </div>
          </Letter>
          <Exit>Salida rápida</Exit>
          <Seats />
        </div>
      </BoxSeats>
      <div>
        <Box width="30%" display="flex" flexDirection="column">
          <Reservation />
          <Box
            bg="#dedbdb"
            borderRadius="6px 6px 0 0"
            width="300px"
            padding="10px"
            display="flex"
          >
            <Text fontWeight={"bold"}> Servicios Adicionales</Text>
          </Box>
          <Box
            bg={"white"}
            width="300px"
            borderRadius="0 0 6px 6px "
            padding="10px 10px 20px 10px "
            display="flex"
            flexDirection="column"
          >
            <Flex justifyContent={"space-between"} mb="8px">
              <Text> Selecciona tu asiento</Text>
              <Text>$284 MXN</Text>
            </Flex>
            <Flex justifyContent={"space-between"} mb="2">
              <Text> IVA servicios </Text>
              <Text>$45 MXN</Text>
            </Flex>
            <Flex justifyContent={"space-between"} fontWeight={"bold"}>
              <Text>Total</Text>
              <Text> $329 MXN</Text>
            </Flex>
          </Box>

          <Box
            bg="#dedbdb"
            marginTop="18px"
            borderRadius="6px 6px 0 0"
            width="300px"
            padding="10px"
            display="flex"
          >
            <Text fontWeight={"bold"}>TUA</Text>
          </Box>
          <Box
            bg={"white"}
            width="300px"
            borderRadius="0 0 6px 6px "
            padding="10px 10px 20px 10px "
            display="flex"
            flexDirection="column"
          >
            <Flex justifyContent={"space-between"} mb="2">
              <Text>
                {" "}
                Tarifa de uso <br></br>de aeropuerto (TUA)
              </Text>
              <Text>$1.191 MXN</Text>
            </Flex>
            <Flex justifyContent={"space-between"} fontWeight={"bold"}>
              <Text>Total</Text>
              <Text> $1.191 MXN</Text>
            </Flex>
          </Box>
          <Box
            bg={"white"}
            marginTop="15px"
            width="300px"
            borderRadius="6px "
            padding="10px 10px 20px 10px "
            display="flex"
            flexDirection="column"
          >
            <Flex justifyContent={"space-between"} fontWeight={"bold"}>
              <Text>Total</Text>
              <Text> $1.191 MXN</Text>
            </Flex>
          </Box>
          <Button
            marginTop="15px"
            variant="outline"
            h="40px"
            width="300px"
            bg="#9b2577"
            borderRadius={20}
            color="white"
          >
            Pagar con PayPal
          </Button>
        </Box>
      </div>
    </SeatsSelection>
  );
};

export default SeatSelection;
