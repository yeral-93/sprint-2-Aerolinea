import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { SectionCards, SectionDiv } from "./StyleFooter";

export const Footer = () => {
  const informationCards = [
    {
      avatar:
        "https://cms.volaris.com/globalassets/1nextgen/externalproducts/hovertransportation.svg",
      title: "Transporte",
      description: "Renta un auto o reserva un shuttle.",
    },
    {
      avatar:
        "https://cms.volaris.com/globalassets/1nextgen/externalproducts/hoveryavas.svg",
      title: "Vuelo + Hotel",
      description: "Encuentra las mejores ofertas para tu viaje.",
    },
    {
      avatar:
        "https://cms.volaris.com/globalassets/1nextgen/externalproducts/hovergroups.svg",
      title: "Grupos",
      description: "Obtén una cotización para grupos de más de 9 personas.",
    },
    {
      avatar:
        "https://cms.volaris.com/globalassets/1nextgen/externalproducts/hoverhotels.svg",
      title: "Hoteles",
      description: " Reserva una habitación en cualquier parte del mundo.",
    },
    {
      avatar:
        "https://cms.volaris.com/globalassets/1nextgen/externalproducts/hovercargo.svg",
      title: "Carga",
      description: "contamos con servicio de carga y mensajería.",
    },
  ];

  return (
    <SectionDiv>
      <Heading size="lg" margin='0px 0px 0px 28px'> Servicios Disponibles</Heading>
      <SectionCards>
        {informationCards.map((item, index) => (
          <Card
            key={`${item.title}-${index}`}
            width='18%'
            height='280px'
            alignItems="center"
            boxshadow="0 0.13rem 0.5rem 0 rgba(0,0,0,.06), 0 0.06rem 0.13rem 0 rgba(0,0,0,.08)"
          >
            <CardHeader display='flex' flexDirection='column' alignItems='center' gap='15px'>
              <Avatar src={item.avatar} />
              <Heading size="md"> {item.title}</Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign='center'>{item.description}</Text>
            </CardBody>
          </Card>
        ))}
      </SectionCards>
    </SectionDiv>
  );
};
