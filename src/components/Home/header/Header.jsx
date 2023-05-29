import React, { useState } from 'react'
import {
  Container, Box, Flex, Image, Square, Text, Button, Stack, 
} from '@chakra-ui/react'
import Fondo from '../../../assets/fondo.jpeg'
import avion from '../../../assets/plane.svg'
import calendario from '../../../assets/calendar.svg'
import down from '../../../assets/chevron-down.svg'
import menos from '../../../assets/minus.svg'
import ModalDestino from '../../modals/ModalDestino'
import ModalCalendario from '../../modals/ModalCalendario'




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenC, setIsOpenC] = useState(false);


  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };
  const onCloseC = () => {
    setIsOpenC(false);
  };

  const onOpenC = () => {
    setIsOpenC(true);
  };
  return (
    <Container maxW='100%' padding="80px 170px 0px 170px">
      <Flex position="relative">

        <Square
          bg='#eae6e6'
          borderRadius={20}
          padding='20px'
          size='55%'
          h='450px'
          mt='25px'
          zIndex="1"
          position="absolute"
        >
          <Box mt='-10px'>
            <Text fontSize='30px' as='b' >Busca un nuevo destino y  comienza la aventura.</Text>
            <Text fontSize='15px' >Descubre vuelos al mejor precio y perfecto para cualquier viaje.</Text>
            <Stack direction='row' justifyContent={'center'} align='center'
              bg='white' width='240px' padding='5px' borderRadius={5} >
              <Button  variant='#9b2577' h='23px' width='120px'  >
                Viaje redondo
              </Button>
              <Button bg='#9b2577' variant='outline' h='23px' width='120px' > 
                Viaje sencillo
              </Button>
            </Stack>
            <Square gap='5px' mt='10px'>
              <Box  onClick={onOpen}bg='white' h='90px' width='50%'>
                <Flex align="center" height="100%">
                  <Text  textAlign="center">Origen</Text>
                </Flex>
              </Box>
              <Box bg='white' h='90px' width='50%'>
              <Flex align="center"  justifyContent='center'>
              <Image src={menos} />  <Image src={menos} />  <Image src={menos} />
              </Flex>
                  <Text textAlign="center">Selecciona un destino</Text>
                  
              </Box>
            </Square>
            <Square gap='5px' mt='10px'>
              <Box onClick={onOpenC} bg='white' h='50px' width='50%'>
                <Flex align="center" height="100%">
                  <Image src={calendario} />
                  <Text textAlign="center">Salida</Text>
                </Flex>
              </Box>
              
              <Box bg='white' h='50px' width='50%'> 
              <Flex align="center" height="100%">
              <Image src={calendario} />
                  <Text textAlign="center">Regreso</Text>
                  </Flex>
              </Box>
            </Square>
            <Square gap='5px' mt='10px'>
              <Box bg='white' h='50px' width='50%' >
                <Flex align="center" height="100%"   justifyContent='space-between' >
                  <Text >Pasajeros</Text>
                  <Image src={down} />
                </Flex>
              </Box>
              <Box bg='white' h='50px' width='50%'>
              <Text >¿Tienes un codigo en promocion?</Text>
                
              </Box>
            </Square>
            <Button bg='#9b2577' variant='outline' h='50px' width='100%' mt='15px'  borderRadius={20} color='white' >
            <Image src={avion} boxSize="30px" mr={2}  />Buscar vuelo 
              </Button>
          </Box>
        </Square>
        <Box h='500px' w='70%' marginLeft='400px'>
          <Image
            boxSize='100%'
            objectFit='cover'
            src={Fondo}
            alt='fondo avion'
            borderRadius={20}
          />

        </Box>
      </Flex>
      <ModalDestino isOpen={isOpen} onClose={onClose} />
      < ModalCalendario isOpen={isOpenC} onClose={onCloseC}/>
    </Container>
  )
}

export default Header