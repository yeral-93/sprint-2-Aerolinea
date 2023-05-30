
import Select from 'react-select'
import { Image, Flex, Box } from '@chakra-ui/react';
import search from '../../../assets/search.svg'
import { useContext, useState } from 'react';

import { AerolineaContext } from '../../../Routes/AppRouter';
const Auto = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const { informacionDelViaje, setInformacionDelViaje, ciudades } = useContext(AerolineaContext);

    const agregarOrigen = (ciudad, origen) => {
        const ciudadDeOrigen = { ...informacionDelViaje };
        ciudadDeOrigen[origen] = ciudad;
        setInformacionDelViaje(ciudadDeOrigen);
    };
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            background: state.isFocused ? '#9b2577' : 'white', // Color de fondo en estado de enfoque
            color: state.isFocused ? 'white' : 'black', // Color de texto en estado de enfoque
        }),
        control: (provided, state) => ({
            ...provided,
            boxShadow: state.isFocused ? '0 0 0 2px #9b2577' : 'none', // Sombra en estado de enfoque
            '&:hover': {
                borderColor: state.isFocused ? '#9b2577' : 'gray', // Color de borde en hover
            },
        }),
    }
    // Función para manejar el cambio de valor seleccionado
    const handleChange = (selected) => {
        setSelectedOption(selected);
        agregarOrigen(selected, "Origen")
    };
    const convertOptions = (options) => {
        return options.map((option) => ({
            value: option.id,
            label: option.ciudad.toUpperCase(),
        }));
    };

    const convertedOptions = convertOptions(ciudades);
    return (
        <Flex width='100%'>

            <Image src={search} />

            <Box width='100%'>
                <Select
                    options={convertedOptions}
                    placeholder="Seleccione una ciudad"
                    size="md"
                    variant="filled"
                    styles={customStyles} // Aplicar estilos personalizados
                    value={selectedOption}
                    onChange={handleChange}
                />
            </Box>
        </Flex>
    )
}

export default Auto