import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import FlightSearch from "../components/FlightSearch/FlightSearch";
import SeatSelection from "../components/SeatSelection/SeatSelection";
import FlightData from "../components/FlightData/FlightData";
import TicketPayment from "../components/TicketPayment/TicketPayment";
import { ChakraProvider } from "@chakra-ui/react";

const AppRouter = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}>
            {/* <Route index element={<Home />} /> */}
            <Route path={"vuelo"} element={<FlightSearch />} />
            <Route path={"asiento"} element={<SeatSelection />} />
            <Route path={"pago"} element={<TicketPayment />} />
            <Route path={"informacion"} element={<FlightData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default AppRouter;
