import { Button, Box } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton } from '@chakra-ui/react';
import Calendar from '../calendar/Calendar'
import { AerolineaContext } from '../../Routes/AppRouter';
import moment from 'moment/moment';

const ModalCalendario = ({ isOpen, onClose, tipoViaje }) => {
    moment.locale('es')
    const daysInMonth = 31; // Número de días en el mes (ajústalo según el mes actual)
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    const [selectedDateSalida, setSelectedDateSalida] = useState(null);
    const [selectedDateRegreso, setSelectedDateRegreso] = useState(null);
    const { informacionDelViaje, setInformacionDelViaje } = useContext(AerolineaContext);
    const handleSelectDateSalida = (date) => {
        setSelectedDateSalida(date);
        fechaDeVuelo(moment(date).format('ddd, DD MMM, YYYY'), 'salida')
    };
    const fechaDeVuelo = (fecha, key) => {
        const fechaVuelo = { ...informacionDelViaje };
        fechaVuelo[key] = fecha;
        setInformacionDelViaje(fechaVuelo);
    };

    const handleSelectDateRegreso = (date) => {
        setSelectedDateRegreso(date);
        fechaDeVuelo(date.format('ddd, DD MMM, YYYY'), 'regreso')
    };  // Array con los números de los días



    return (

        <div>

            <Modal isOpen={isOpen} onClose={onClose} size={'xl'} >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Selecciona las fechas</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display="flex" gap='35px'>
                            {tipoViaje === 'sencillo' ? <Calendar title="Fecha salida" onSelectDate={handleSelectDateSalida} /> :
                                <>
                                    <Calendar title="Fecha salida" onSelectDate={handleSelectDateSalida} />
                                    <Calendar title="Fecha regreso" onSelectDate={handleSelectDateRegreso} />
                                </>
                            }
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                  
                        <Button variant="ghost" bg='#9b2577' onClick={onClose}>Hecho</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalCalendario