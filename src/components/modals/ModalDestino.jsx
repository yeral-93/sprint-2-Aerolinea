
import {Modal,Image, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, } from '@chakra-ui/react';
import search from '../../assets/search.svg'
import Select from 'react-select'
import Auto from '../Home/header/Auto';

const ModalDestino = ({ isOpen, onClose }) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}   >
    <ModalOverlay />
    <ModalContent  width='310px' margin='170px 180px 0 40px' borderRadius={13} height={315} >
      <ModalHeader>¿ A donde viajas ?</ModalHeader>
      <ModalCloseButton />
      <ModalBody >
        <Auto/>
      </ModalBody>
    </ModalContent>
  </Modal>
  )
}

export default ModalDestino