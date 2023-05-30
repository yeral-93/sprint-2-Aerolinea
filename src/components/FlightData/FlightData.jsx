import React from 'react'
import { Box, Image, Text, Flex, } from '@chakra-ui/react';
import avion from '../../assets/iconovuelo.svg'
const FlightData = () => {
  return (
    <div style={{ backgroundColor: '#eae6e6', height: '100vh', padding: '0 50px' }}>
      <Text color='#9b2577' fontSize='50px' fontWeight='extrabold' textAlign='center'>
        VUELARIS
      </Text>
      <Box>
        <Text bg='#9b2577' height='45px' color='white' padding='8px 0 0 15px' fontWeight='bold' fontSize='20px'> Detalles de los pasajeros</Text>
        <Text marginTop={5} bg='#9b2577' height='45px' color='white' padding='8px 0 0 15px' fontWeight='bold' fontSize='20px'>
          Informacion del viaje
        </Text>
      </Box>
      <Box fontWeight='bold'>
        <Flex >
          <Text >Viernes, 19MAY</Text>
          <Text color='#9b2577'> __Medellin(EOH) a Quibdo(UIB)</Text>
        </Flex>
        <Flex gap='400px'>
          <Box >
            <Text>Satena</Text>
          </Box>
          <Box display={'flex'} gap='100px'  >
            <Text > Salida  <br /> 10:40 AM</Text>
            <Image src={avion} boxSize="50px" />
            <Text > LLegada  <br /> 11:22 AM</Text>
          </Box>
        </Flex>

        <Text mb='-20px' align={'center'} mt={3} color='#9b2577' >Informacion del vuelo</Text>

      </Box>

      <Box width='100%' marginTop={5} borderWidth="2px" borderColor=" #9b2577">
        <Text color='#9b2577' fontWeight='extrabold' fontSize={20} padding='8px 0 0px 20px'> Vuelo 1</Text>
        <Box display={'flex'} padding='20px' gap={5} justifyContent={'space-between'} fontWeight='bold'>

          <Box color='#9b2577'  >
            <Text mb={4} lineHeight="1.2" fontSize="16px">Aeropuerto <br /> salida</Text>
            <Text mb={4} lineHeight="1.2" fontSize="16px">Aeropuerto <br /> Llegada</Text>
            <Text mb={4} >Aerolinea</Text>
            <Text mb={4} >Clase</Text>
          </Box>
          <Box  >
            <Text mb={4} lineHeight="1.2" fontSize="16px">Enrique Olaya Herrera Airport (EOH)<br />  Medellin, CO </Text>
            <Text mb={4} lineHeight="1.2" fontSize="16px">Quibdo Airport (UIB) <br /> Quibdo, CO </Text>
            <Text mb={4} >Satena</Text>
            <Text >Turista</Text>
          </Box>
          <Box >
            <Text mb={4} color='#9b2577'  >Salida</Text>
            <Text mb={8} >10:40 AM</Text>
            <Text color='#9b2577' >Equipaje</Text>
          </Box>
          <Box  >
            <Text mb={4} color='#9b2577' >Llegada</Text>
            <Text mb={8} >11:22 AM </Text>
            <Text   >1 </Text>
          </Box>

        </Box>

      </Box>







    </div>
  )
}

export default FlightData