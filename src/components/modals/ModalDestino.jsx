
import {Image, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Stack, 
     ModalCloseButton, InputLeftElement, InputGroup} from '@chakra-ui/react';
import search from '../../assets/search.svg'

const ModalDestino = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}   >
    <ModalOverlay />
    <ModalContent  width='310px' margin='170px 180px 0 40px' borderRadius={13} height={315} >
      <ModalHeader>¿ A donde viajas ?</ModalHeader>
      <ModalCloseButton />
      <ModalBody >
      <Stack spacing={0}>
      <InputGroup>
    <InputLeftElement pointerEvents='none'>
    <Image src={search} />
    </InputLeftElement>
    <Input  placeholder='' />
  </InputGroup>  
  <Input
    placeholder='Here is a sample placeholder'
  />
  <Input
    placeholder='Here is a sample placeholder'
  />
  <Input
    placeholder='Here is a sample placeholder'
  />
  <Input
    placeholder='Here is a sample placeholder'
  />
  <Input
    placeholder='Here is a sample placeholder'
  />
</Stack>
      </ModalBody>

    </ModalContent>
  </Modal>
  )
}

export default ModalDestino