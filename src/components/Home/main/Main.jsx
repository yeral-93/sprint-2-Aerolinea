import React from "react";
import {
  Heading,
  Card,
  CardBody,
  Text,
  CardFooter,
  Image,
} from "@chakra-ui/react";
import { MainDiv } from "./StyleMain";

const Main = () => {
  return (
    <MainDiv>
      <Heading size="lg" margin='0px 0px 30px 0px'>
        Pago Seguro
      </Heading>
      <Card
        display="flex"
        flexDirection="revert"
        justifyContent="space-between"
        boxshadow="0 0.13rem 0.5rem 0 rgba(0,0,0,.06), 0 0.06rem 0.13rem 0 rgba(0,0,0,.08)"
      >
        <section>
          <CardBody display="flex">
            <Text>
              Tarjeta de crédito, tarjeta de debito y pago electrónico.{" "}
            </Text>
          </CardBody>
          <CardFooter display="flex" gap="15px">
            <Image
              src="https://cms.volaris.com/globalassets/1nextgen/payments/amex.svg"
              alt="amex"
              borderRadius="lg"
            />
            <Image
              src="https://cms.volaris.com/globalassets/1nextgen/payments/paypal.svg"
              alt="paypal"
              borderRadius="lg"
            />
            <Image
              src="https://cms.volaris.com/globalassets/1nextgen/payments/invex.svg"
              alt="invesBanco"
              borderRadius="lg"
            />
            <Image
              src="https://cms.volaris.com/globalassets/1nextgen/payments/mastercard.svg"
              alt="mastercards"
              borderRadius="lg"
            />
            <Image
              src="https://cms.volaris.com/globalassets/1nextgen/payments/visa.svg"
              alt="visa"
              borderRadius="lg"
            />
          </CardFooter>
        </section>
        <section>
          <CardBody display="flex">
            <Text>
              Efectivo en cualquiera de las sucursales participantes.{" "}
            </Text>
          </CardBody>
          <CardFooter display="flex" gap="15px">
            <Image
              src="https://cms.volaris.com/globalassets/1nextgen/payments/oxxo.svg"
              alt="Oxxo"
              borderRadius="lg"
            />
            <Image
              src="https://cms.volaris.com/globalassets/1nextgen/payments/seven.svg"
              alt="seven"
              borderRadius="lg"
            />
            <Image
              src="https://cms.volaris.com/globalassets/1nextgen/payments/walmart.svg"
              alt="walmart"
              borderRadius="lg"
            />
            <Image
              src="https://cms.volaris.com/globalassets/1nextgen/payments/famahorro.svg"
              alt="famahorro"
              borderRadius="lg"
            />
          </CardFooter>
        </section>
      </Card>
    </MainDiv>
  );
};

export default Main;
