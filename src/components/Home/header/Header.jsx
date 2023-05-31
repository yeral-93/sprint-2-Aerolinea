import React, { useContext, useState, } from 'react'
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
import ModalPasajero from '../../modals/ModalPasajero'
import { useNavigate } from 'react-router-dom'
import { AerolineaContext } from '../../../Routes/AppRouter'




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenC, setIsOpenC] = useState(false);
  const [isOpenP, setIsOpenP] = useState(false);
  const [origenODestino, setorigenODestino] = useState("");
  const { informacionDelViaje } = useContext(AerolineaContext);
  const { Origen, Destino, salida, regreso, adulto, nino, bebe } = informacionDelViaje
  const navegar = useNavigate()
  const [viajeSeleccionado, setViajeSeleccionado] = useState('redondo');

  const handleClickRedondo = () => {
    setViajeSeleccionado('redondo');
  };

  const handleClickSencillo = () => {
    setViajeSeleccionado('sencillo');
  };



  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = (event) => {
    const id = event.target.getAttribute('data-id');
    setorigenODestino(id);
    setIsOpen(true);
  };
  const onCloseC = () => {
    setIsOpenC(false);
  };

  const onOpenC = () => {
    setIsOpenC(true);
  };
  const onCloseP = () => {
    setIsOpenP(false);
  };

  const onOpenP = () => {
    setIsOpenP(true);
  };
  const onClikBuscarVuelo = () => {
    navegar('vuelo')
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
            <Stack direction='row' justifyContent='center' align='center' bg='white' width='240px' padding='5px' borderRadius={5}>
              <Button
                variant={viajeSeleccionado === 'redondo' ? '#9b2577' : 'outline'}
                bg={viajeSeleccionado === 'redondo' ? '#9b2577' : ''}
                h='23px'
                width='120px'
                onClick={handleClickRedondo}
              >
                Viaje redondo
              </Button>
              <Button
                variant={viajeSeleccionado === 'sencillo' ? '#9b2577' : 'outline'}
                bg={viajeSeleccionado === 'sencillo' ? '#9b2577' : ''}
                h='23px'
                width='120px'
                onClick={handleClickSencillo}
              >
                Viaje sencillo
              </Button>
            </Stack>

            <Square gap='5px' mt='10px'>
              <Box onClick={onOpen} bg='white' h='90px' width='50%' cursor={'pointer'} data-id="Origen">
                <Box align="center" justifyContent='center' mt={3}>
                  <Text textAlign="center" fontSize='25px'>{Origen ? Origen.label : "Origén"}</Text>
                  <Text fontSize='13px' >Origen</Text>
                </Box>
              </Box>
              <Box onClick={onOpen} bg='white' h='90px' width='50%' cursor={'pointer'} data-id="Destino">
                <Flex align="center" justifyContent='center' mt={3}>
                  <Text textAlign="center" fontSize='25px' display={'flex'}> {Destino ? Destino.label : <> <Image src={menos} />  <Image src={menos} />  <Image src={menos} /></>}</Text>
                </Flex>
                <Text textAlign="center" fontSize='13px'>Selecciona un destino</Text>
              </Box>
            </Square>
            <Square gap='5px' mt='10px'>
              <Box onClick={onOpenC} bg='white' h='50px' width='50%' cursor={'pointer'}>
                <Flex align="center" height="100%">
                  <Image src={calendario} />
                  <Text textAlign="center">{salida ? salida : "Salida"} </Text>
                </Flex>
              </Box>

              <Box bg='white' h='50px' width='50%'>
                <Flex align="center" height="100%">
                  <Image src={calendario} />
                  <Text textAlign="center">{regreso ? regreso : "Regreso"}</Text>
                </Flex>
              </Box>
            </Square>
            <Square gap='5px' mt='10px'>
              <Box bg='white' h='50px' width='50%' onClick={onOpenP} cursor={'pointer'}>
                <Flex align="center" height="100%" justifyContent='space-between' >
                  <Text >
                    {adulto > 0 || bebe > 0 || nino > 0 ? (
                      <>
                        {adulto > 0 && `${adulto} Adulto `}
                        {nino > 0 && `${nino} Niño `}
                        {bebe > 0 && `${bebe} Bebé `}
                      </>
                    ) : (
                      "Pasajeros"
                    )}
                  </Text>
                  <Image src={down} />
                </Flex>
              </Box>
              <Box bg='white' h='50px' width='50%'>
                <Text >¿Tienes un codigo en promocion?</Text>

              </Box>
            </Square>

            <Button onClick={onClikBuscarVuelo} bg='#9b2577' variant='outline' h='50px' width='100%' mt='15px' borderRadius={20} color='white' >
              <Image src={avion} boxSize="30px" mr={2} />
              Buscar vuelo

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
      <ModalDestino isOpen={isOpen} onClose={onClose} origin={origenODestino} />
      < ModalCalendario isOpen={isOpenC} onClose={onCloseC} tipoViaje={viajeSeleccionado}/>
      <ModalPasajero isOpen={isOpenP} onClose={onCloseP} />

    </Container>
  )
}

export default Header