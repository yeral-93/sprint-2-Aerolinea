import React, { useContext } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { AerolineaContext } from "../../Routes/AppRouter";

const Reservation = (vuelo) => {
  console.log('====================================');
  console.log({vuelo});
  console.log('====================================');
  const { informacionDelViaje } = useContext(AerolineaContext);
  const { Origen, Destino, salida, regreso, adulto, nino, bebe } = informacionDelViaje
  return (
    <div>
      <Box width="30%" display="flex" flexDirection="column">
        <Box
          bg="#dedbdb"
          borderRadius="6px 6px 0 0"
          width="300px"
          display="flex"
          padding="10px"
          marginTop="20px"
        >
          <Text fontWeight={"bold"}> Tu reservacion</Text>
        </Box>
        <Box
          bg={"white"}
          height="150px"
          width="300px"
          borderRadius="0 0 6px 6px "
          padding="8px 8px 2px 8px "
        >
          <Flex justifyContent={"space-between"} fontWeight={"bold"} mb="8px">
            <Text> Pasajeros</Text>
            <Text>{adulto > 0 || bebe > 0 || nino > 0 ? (
                      <>
                        {adulto > 0 && `${adulto} Adulto `}
                        {nino > 0 && `${nino} Niño `}
                        {bebe > 0 && `${bebe} Bebé `}
                      </>
                    ) : (
                      "Pasajeros"
                    )}</Text>
          </Flex>
          <Text mb="-8px"> Vuelo de salida</Text>
          <Flex fontWeight={"bold"} fontSize="25px" gap={4}>
            <Text>{Origen?.label}</Text>
            <Text> ___</Text>
            <Text>{Destino?.label}</Text>
          </Flex>
          <Flex gap={12}>
            <Text> {vuelo?.horaSalida}</Text>
            <Text>{vuelo?.horaLlegada}</Text>
          </Flex>
          <Text fontWeight={"bold"}>{salida}</Text>
        </Box>
        <Box
          bg="#dedbdb"
          borderRadius="6px 6px 0 0"
          width="300px"
          display="flex"
          padding="10px"
          marginTop="15px"
        >
          <Text fontWeight={"bold"}>{vuelo?.precio}</Text>
        </Box>
        <Box
          bg={"white"}
          width="300px"
          borderRadius="0 0 6px 6px "
          padding="8px"
          marginBottom="15px"
        >
          <Flex justifyContent={"space-between"} mb="2">
            <Text> Tarifa base</Text>
            <Text>$1.505 MXN</Text>
          </Flex>
          <Flex justifyContent={"space-between"} mb="1">
            <Text> Descuento promocional</Text>
            <Text>$ 0</Text>
          </Flex>
          <Flex justifyContent={"space-between"} mb="1">
            <Text> Tarifa base con descuento</Text>
            <Text> $ 0</Text>
          </Flex>
          <Flex justifyContent={"space-between"} mb="1">
            <Text> IVA Tarifa</Text>
            <Text>$ 0</Text>
          </Flex>
          <Flex justifyContent={"space-between"} fontWeight={"bold"}>
            <Text>Total</Text>
            <Text> $548 MXN</Text>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Reservation;
