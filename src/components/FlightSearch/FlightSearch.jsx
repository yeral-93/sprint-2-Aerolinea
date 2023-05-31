import { Flex, Button, Box, Square, Text, Image } from "@chakra-ui/react";
import maleta from "../../assets/briefcase.svg";
import linea from "../../assets/line_with_dots (1).png";
import Reservation from "./Reservation";
import { useContext, useEffect, useState } from "react";
import { AerolineaContext } from "../../Routes/AppRouter";
import { useNavigate } from "react-router-dom";


const FlightSearch = () => {
  const { informacionDelViaje, vuelos } = useContext(AerolineaContext);
  const { Origen, Destino, salida, regreso, adulto, nino, bebe } = informacionDelViaje
  //const [vueloseleccionado, setVueloseleccionado] = useState();
  const [vuelosEncontrados, setVuelosEncontrados] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [vueloseleccionado, setVueloseleccionado] = useState(vuelosEncontrados[0]);
  const navegar = useNavigate()
  const handleItemClick = (id) => {
    setSelectedItem(id);
  };
console.log(vueloseleccionado);
  const selectedStyles = {
    backgroundColor: "#9b2577",
  };

  const buscarVuelos = (vuelos, origen, destino) => {

    const vuelosEncontrados = vuelos.filter(vuelo =>
      vuelo?.origen.toLowerCase() === origen?.label.toLowerCase()
      &&
      vuelo?.destino.toLowerCase() === destino?.label.toLowerCase()
    );

    setVuelosEncontrados(vuelosEncontrados)
  }
  const OnClikVueloseleccionado = (vueloS) => {
    setVueloseleccionado(vueloS)
  }
  useEffect(() => {
    buscarVuelos(vuelos, Origen, Destino)

  }, [Destino, Origen, vuelos]);

  const onClikCambiarVuelo = () => {
    navegar('/')
  };
  
  const onClikEscogerSillas = () => {
    navegar('/asiento')
  }

  return (
    <div
      style={{
        backgroundColor: "#eae6e6",
        height: "100vh",
        display: "flex",
        gap: "30px",
        padding: "30px ",
      }}
    >
      <Box width="60%" marginTop="32px">
        <Square display={"flex"} justifyContent={"space-between"}>
          <Text fontWeight={"bold"} fontSize={"35px"}>
            {" "}
            Vuelo de salida
          </Text>
          <Button
            variant="outline"
            h="40px"
            width="150px"
            borderColor="#9b2577"
            borderRadius={20}
            color="#9b2577"
            onClick={onClikCambiarVuelo}
          >
            {" "}
            Cambiar vuelo
          </Button>
        </Square>
        <Text fontSize={"28px"} mb="-10px">
          {salida}
        </Text>
        <Text fontWeight={"thin"} letterSpacing="0.5">
          {`${Origen?.label} a ${Destino?.label}`}
        </Text>
        <Text fontWeight={"bold"} fontSize={"20px"} lineHeight="60px">
          Selecion de horario y equipaje
        </Text>
        {
          vuelosEncontrados?.map((vuelo, index) => (
            <Square 
              key={vuelo.id}
              data-id={vuelo.id}
              bg="white"
              width="100%"
              borderRadius={"10px"}
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
              mb={4}
              onClick={() => OnClikVueloseleccionado(vuelo)}
            >
              <Box width={"40%"} marginLeft={3}>
                <Flex justifyContent={"space-between"}>
                  <Box marginTop={2.5}>
                    <Text fontWeight={"bold"}>{vuelo.horaSalida}</Text>
                  </Box>
                  <Box width="60px" textAlign={"center"}>
                    <Text fontSize={"12px"}>{vuelo.duracion}</Text>
                    <Image src={linea} width="100%" />
                    <Text fontSize={"12px"}>Sin escala</Text>
                  </Box>
                  <Box marginTop={2.5}>
                    <Text fontWeight={"bold"}>{vuelo.horaLlegada}</Text>
                  </Box>
                </Flex>
              </Box>
              <Box width={"70%"} margin={3}>
                <Flex gap={"10px"}>
                  <Box

                    sx={selectedItem === `objetoPersonal${vuelo.id}` ? selectedStyles : {}}
                    borderWidth="1px"
                    borderColor="black"
                    width="128px"
                    id={`objetoPersonal${vuelo.id}`}
                    height="80px"
                    borderRadius={3}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    onClick={() => handleItemClick(`objetoPersonal${vuelo.id}`)}
                  >
                    <Image src={maleta} />
                    <Text textAlign="center" whiteSpace="nowrap">
                      1 objeto personal
                    </Text>
                    <Text fontWeight="bold">$15000</Text>
                  </Box>
                  <Box
                    sx={selectedItem === `equipajeDeMano${vuelo.id}` ? selectedStyles : {}}
                    borderWidth="1px"
                    borderColor="black"
                    width="128px"
                    id={`equipajeDeMano${vuelo.id}`}
                    height="80px"
                    borderRadius={3}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    onClick={() => handleItemClick(`equipajeDeMano${vuelo.id}`)}
                  >
                    <Image src={maleta} />
                    <Text textAlign="center" whiteSpace="nowrap">
                      Equipaje de mano
                    </Text>
                    <Text fontWeight="bold">$25000</Text>
                  </Box>
                  <Box
                    sx={selectedItem === `equipaje25kg${vuelo.id}` ? selectedStyles : {}}
                    borderWidth="1px"
                    borderColor="black"
                    width="128px"
                    id={`equipaje25kg${vuelo.id}`}
                    height="80px"
                    borderRadius={3}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    onClick={() => handleItemClick(`equipaje25kg${vuelo.id}`)}
                  >
                    <Image src={maleta} />
                    <Text textAlign="center" whiteSpace="nowrap">
                      Equipaje 25kg
                    </Text>
                    <Text fontWeight="bold">$40000</Text>
                  </Box>
                </Flex>
              </Box>
            </Square>
          ))

        }

      </Box>
      <Box>
        <Reservation />
        <Button
          marginTop="15px"
          variant="outline"
          h="40px"
          width="300px"
          bg="#9b2577"
          borderRadius={20}
          color="white"
          vuelo={vueloseleccionado}
          onClick={onClikEscogerSillas}
        >
          {" "}
          Selecionar asientos
        </Button>
      </Box>
    </div>
  );
};

export default FlightSearch;
