import React, { useContext, useEffect, useState } from 'react'
import {
  Button, Modal, ModalOverlay, ModalContent, ModalBody,
  Divider, Box, Text, Flex
} from '@chakra-ui/react';
import { AerolineaContext } from '../../Routes/AppRouter';

const ModalPasajero = ({ isOpen, onClose }) => {
  const [contadorAdulto, setContadorAdulto] = useState(0);
  const [contadorNino, setContadorNino] = useState(0);
  const [contadorBebe, setContadorBebe] = useState(0);
  const { informacionDelViaje, setInformacionDelViaje } = useContext(AerolineaContext);

  useEffect(() => {
    AgregarPasajero(contadorAdulto, "adulto")
  }, [contadorAdulto]);
  
  useEffect(() => {
    AgregarPasajero(contadorNino, "nino")
  }, [contadorNino]);
  useEffect(() => {
    AgregarPasajero(contadorBebe, "bebe")
  }, [contadorBebe]);
  const incrementarAdulto = () => {
    setContadorAdulto(contadorAdulto + 1);    
  };

  const decrementarAdulto = () => {
    if (contadorAdulto > 0) {
      setContadorAdulto(contadorAdulto - 1);
      
    }
  };
  

  const incrementarNino = () => {
    setContadorNino(contadorNino + 1);
   
  };

  const decrementarNino = () => {
    if (contadorNino > 0) {
      setContadorNino(contadorNino - 1);
     
    }
  };
 

  const incrementarBebe = () => {
    setContadorBebe(contadorBebe + 1);
   
  };

  const decrementarBebe = () => {
    if (contadorBebe > 0) {
      setContadorBebe(contadorBebe - 1);
      
    }
  };
  const AgregarPasajero = (pasajero, key) => {
    const cantidadPasajeros = { ...informacionDelViaje };
    cantidadPasajeros[key] = pasajero;
    setInformacionDelViaje(cantidadPasajeros);
};
  return (
    <Modal isOpen={isOpen} onClose={onClose}   >
      <ModalOverlay />
      <ModalContent width='300px' margin='345px 180px 0 40px' borderBottomRadius={15}>
        <ModalBody  marginLeft='-8px'>
          <Box display='flex' justifyContent={'space-between'} mb={5} mt={2}> 
            <Text> Adultos <Text> (13+ años ) </Text></Text>
            <Button bg='white' borderWidth="1px" borderColor="black" >
              <Flex gap={4} padding='0 5px 0 5px 0' align={'center'}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px"   viewBox="0 0 24 24" width="24px"  fill="#9b2577" onClick={decrementarAdulto}>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
                <Divider orientation="vertical" borderColor="black" height="37px" />
                <label >{contadorAdulto}</label>
                <Divider orientation="vertical" borderColor="black" height="37px" />
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"  fill="#9b2577" onClick={incrementarAdulto}>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
              </Flex>
            </Button>

          </Box>
          <Box display='flex' justifyContent={'space-between'} mb={5}>
            <Text> Niños <Text> (2-12 años ) </Text></Text>
            <Button bg='white' borderWidth="1px" borderColor="black" >
              <Flex gap={4} padding='0 5px 0 5px 0' align={'center'}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px"   viewBox="0 0 24 24" width="24px"  fill="#9b2577" onClick={decrementarNino}>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
                <Divider orientation="vertical" borderColor="black" height="37px" />
                <label >{contadorNino}</label>
                <Divider orientation="vertical" borderColor="black" height="37px" />
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"  fill="#9b2577" onClick={incrementarNino}>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
              </Flex>
            </Button>

          </Box>
          <Box display='flex' justifyContent={'space-between'}>
            <Text> Bebes <Text> (0-23 Meses ) </Text></Text>
            <Button bg='white' borderWidth="1px" borderColor="black" >
              <Flex gap={4} padding='0 5px 0 5px 0' align={'center'}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px"   viewBox="0 0 24 24" width="24px"  fill="#9b2577" onClick={decrementarBebe} >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
                <Divider orientation="vertical" borderColor="black" height="37px" />
                <label >{contadorBebe}</label>
                <Divider orientation="vertical" borderColor="black" height="37px" />
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"  fill="#9b2577" onClick={incrementarBebe}>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
              </Flex>
            </Button>

          </Box>

        </ModalBody>

      </ModalContent>
    </Modal>
  )
}

export default ModalPasajero