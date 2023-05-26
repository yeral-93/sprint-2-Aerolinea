import { Button, Select, Box, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton } from '@chakra-ui/react';


const ModalCalendario = ({ isOpen, onClose }) => {
    const daysInMonth = 31; // Número de días en el mes (ajústalo según el mes actual)
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1); // Array con los números de los días

    return (

        <div>

            <Modal isOpen={isOpen} onClose={onClose} size={'xl'} >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Selecciona las fechas</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        
                    <Grid templateColumns="repeat(7, 1fr)" gap={2}>
                            {daysArray.map((day) => (
                                <Box key={day} p={2} borderWidth={1} borderColor="gray.200">
                                    {day}
                                </Box>
                            ))}
                        </Grid>
                        <Grid templateColumns="repeat(7, 1fr)" gap={2}>
                            {daysArray.map((day) => (
                                <Box key={day} p={2} borderWidth={1} borderColor="gray.200">
                                    {day}
                                </Box>
                            ))}
                        </Grid>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" bg='#9b2577'>Hecho</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalCalendario