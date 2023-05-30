import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import FlightSearch from "../components/FlightSearch/FlightSearch";
import SeatSelection from "../components/SeatSelection/SeatSelection";
import FlightData from "../components/FlightData/FlightData";
import TicketPayment from "../components/TicketPayment/TicketPayment";
import { ChakraProvider } from "@chakra-ui/react";
import NotFound from "../components/NotFound/NotFound";
import axios from "axios";

export const AerolineaContext = createContext({
  informacionDelViaje: {},
  setInformacionDelViaje: () => null,
  ciudades: [],
  setCiudades: () => null,
  vuelos: [],
  setVuelos: () => null,

});
const AppRouter = () => {
  const urlCiudad = 'http://localhost:3000/ciudades'
  const urlVuelos = 'http://localhost:3000/vuelos'
  const [informacionDelViaje, setInformacionDelViaje] = useState({});
  const [ciudades, setCiudades] = useState([]);
  const [vuelos, setVuelos] = useState([]);


  const contextData = {
    informacionDelViaje,
    setInformacionDelViaje,
    ciudades,
    setCiudades,
    vuelos,
    setVuelos,
  }

  useEffect(() => {
    const fetchData = async() => {
      try {
        const dataVuelos = await peticionGet(urlVuelos);
        const dataCiudad = await peticionGet(urlCiudad);
        setVuelos(dataVuelos);
        setCiudades(dataCiudad);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();

  }, []);
  const peticionGet = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; // Lanzar el error para que pueda ser capturado en el bloque catch
    }
  };
  return (
    <AerolineaContext.Provider value={contextData}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route index element={<Home />} /> */}
            <Route path={"/"} index element={<Home />} />
            <Route path={"vuelo"} element={<FlightSearch />} />
            <Route path={"asiento"} element={<SeatSelection />} />
            <Route path={"pago"} element={<TicketPayment />} />
            <Route path={"informacion"} element={<FlightData />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AerolineaContext.Provider>
  );
};

export default AppRouter;
