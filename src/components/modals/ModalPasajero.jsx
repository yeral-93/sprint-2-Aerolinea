import React from 'react'
import {
  Button, Modal, ModalOverlay, ModalContent, ModalBody,
  Divider, Box, Text, Flex
} from '@chakra-ui/react';

const ModalPasajero = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}   >
      <ModalOverlay />
      <ModalContent width='300px' margin='345px 180px 0 40px' borderBottomRadius={15}>
        <ModalBody  marginLeft='-8px'>
          <Box display='flex' justifyContent={'space-between'} mb={5} mt={2}> 
            <Text> Adultos <Text> (13+ años ) </Text></Text>
            <Button bg='white' borderWidth="1px" borderColor="black" >
              <Flex gap={4} padding='0 5px 0 5px 0' align={'center'}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px"   viewBox="0 0 24 24" width="24px"  fill="#9b2577" >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
                <Divider orientation="vertical" borderColor="black" height="37px" />
                <label >0</label>
                <Divider orientation="vertical" borderColor="black" height="37px" />
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"  fill="#9b2577" >
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
                <svg xmlns="http://www.w3.org/2000/svg" height="24px"   viewBox="0 0 24 24" width="24px"  fill="#9b2577" >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
                <Divider orientation="vertical" borderColor="black" height="37px" />
                <label >0</label>
                <Divider orientation="vertical" borderColor="black" height="37px" />
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"  fill="#9b2577" >
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
                <svg xmlns="http://www.w3.org/2000/svg" height="24px"   viewBox="0 0 24 24" width="24px"  fill="#9b2577" >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
                <Divider orientation="vertical" borderColor="black" height="37px" />
                <label >0</label>
                <Divider orientation="vertical" borderColor="black" height="37px" />
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"  fill="#9b2577" >
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