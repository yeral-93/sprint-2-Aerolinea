import { Flex, Button, Box, Square, Text, Image } from "@chakra-ui/react";
import maleta from "../../assets/briefcase.svg";
import linea from "../../assets/line_with_dots (1).png";
import Reservation from "./Reservation";
import { useNavigate } from "react-router-dom";

const FlightSearch = () => {
  const navegar = useNavigate ()
  const onClikCambiarVuelo = () => {
    navegar ('/') 
   };

   const navigation = useNavigate ()
  const onClikSelectSeat = () => {
    navigation ('asiento') 
   };
  const hoverStyles = {
    _hover: {
      backgroundColor: "#9b2577",
      "& *": {
        color: "white",
      },
      "& img": {
        filter: "brightness(0) invert(1)",
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#eae6e6",
        height: "100vh",
        display: "flex",
        gap: "50px",
        padding: "50px 100px",
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
            onClick={ onClikCambiarVuelo}
          >
            {" "}
            Cambiar vuelo
          </Button>
        </Square>
        <Text fontSize={"28px"} mb="-10px">
          Martes 30 nov 2021
        </Text>
        <Text fontWeight={"thin"} letterSpacing="0.5">
          Cd Mex(AICM) a culiacan
        </Text>
        <Text fontWeight={"bold"} fontSize={"20px"} lineHeight="60px">
          Selecion de horario y equipaje
        </Text>
        <Square
          bg="white"
          width="100%"
          borderRadius={"10px"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Box width={"40%"} marginLeft={3}>
            <Flex justifyContent={"space-between"}>
              <Box marginTop={2.5}>
                <Text fontWeight={"bold"}>05:50 PM</Text>
              </Box>
              <Box width="60px" textAlign={"center"}>
                <Text fontSize={"12px"}>1h 57min</Text>
                <Image src={linea} width="100%" />
                <Text fontSize={"12px"}>Sin escala</Text>
              </Box>
              <Box marginTop={2.5}>
                <Text fontWeight={"bold"}>05:50 PM</Text>
              </Box>
            </Flex>
          </Box>
          <Box width={"70%"} margin={3}>
            <Flex gap={"10px"}>
              <Box
                sx={hoverStyles}
                borderWidth="1px"
                borderColor="black"
                width="128px"
                height="80px"
                borderRadius={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image src={maleta} />
                <Text textAlign="center" whiteSpace="nowrap">
                  1 objeto personal
                </Text>
                <Text fontWeight={"bold"}>$548 MXN</Text>
              </Box>
              <Box
                sx={hoverStyles}
                borderWidth="1px"
                borderColor="black"
                width="128px"
                height="80px"
                borderRadius={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image src={maleta} />
                <Text textAlign="center" whiteSpace="nowrap">
                  Equipaje de mano
                </Text>
                <Text fontWeight={"bold"}>$548 MXN</Text>
              </Box>
              <Box
                sx={hoverStyles}
                borderWidth="1px"
                borderColor="black"
                width="128px"
                height="80px"
                borderRadius={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image src={maleta} />
                <Text textAlign="center" whiteSpace="nowrap">
                  Equipaje 25kg
                </Text>
                <Text fontWeight={"bold"}>$548 MXN</Text>
              </Box>
            </Flex>
          </Box>
        </Square>
        <Square
          bg="white"
          width="100%"
          height="100px"
          borderRadius={"10px"}
          marginTop={3}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Box width={"40%"} marginLeft={3}>
            <Flex justifyContent={"space-between"}>
              <Box marginTop={2.5}>
                <Text fontWeight={"bold"}>05:50 PM</Text>
              </Box>
              <Box width="60px" textAlign={"center"}>
                <Text fontSize={"12px"}>1h 57min</Text>
                <Image src={linea} width="100%" />
                <Text fontSize={"12px"}>Sin escala</Text>
              </Box>
              <Box marginTop={2.5}>
                <Text fontWeight={"bold"}>05:50 PM</Text>
              </Box>
            </Flex>
          </Box>
          <Box width={"70%"} margin={3}>
            <Flex gap={"10px"}>
              <Box
                sx={hoverStyles}
                borderWidth="1px"
                borderColor="black"
                width="128px"
                height="80px"
                borderRadius={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image src={maleta} />
                <Text textAlign="center" whiteSpace="nowrap">
                  1 objeto personal
                </Text>
                <Text fontWeight={"bold"}>$548 MXN</Text>
              </Box>
              <Box
                sx={hoverStyles}
                borderWidth="1px"
                borderColor="black"
                width="128px"
                height="80px"
                borderRadius={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image src={maleta} />
                <Text textAlign="center" whiteSpace="nowrap">
                  Equipaje de mano
                </Text>
                <Text fontWeight={"bold"}>$548 MXN</Text>
              </Box>
              <Box
                sx={hoverStyles}
                borderWidth="1px"
                borderColor="black"
                width="128px"
                height="80px"
                borderRadius={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image src={maleta} />
                <Text textAlign="center" whiteSpace="nowrap">
                  Equipaje 25kg
                </Text>
                <Text fontWeight={"bold"}>$548 MXN</Text>
              </Box>
            </Flex>
          </Box>
        </Square>
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
          onClick={ onClikSelectSeat}
        >
          {" "}
          Selecionar asientos
        </Button>
      </Box>
    </div>
  );
};

export default FlightSearch;
