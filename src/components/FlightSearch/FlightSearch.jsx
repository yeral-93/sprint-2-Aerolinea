import { Flex, Button, Box, Square, Text, Image } from '@chakra-ui/react';
import maleta from '../../assets/briefcase.svg'
import linea from '../../assets/line_with_dots (1).png'

const FlightSearch = () => {
  const hoverStyles = {
    _hover: {
      backgroundColor: '#9b2577',
      '& *': {
        color: 'white',
      },
      '& img': {
        filter: 'brightness(0) invert(1)',
      },
    },
  };


  return (
    <div style={{ backgroundColor: '#eae6e6', height: '100vh', display: 'flex', gap: '20px', padding: '0 50px' }}>
      <Box width='80%' marginTop='32px'>
        <Square display={'flex'} justifyContent={'space-between'} >
          <Text fontWeight={'bold'} fontSize={'35px'} > Vuelo de salida</Text>
          <Button variant='outline' h='40px' width='150px' borderColor='#9b2577' borderRadius={20} color='#9b2577'> Cambiar vuelo</Button>
        </Square >
        <Text fontSize={'28px'} mb='-10px'>Martes 30 nov 2021</Text>
        <Text fontWeight={'thin'} letterSpacing='0.5' >Cd Mex(AICM) a culiacan</Text>
        <Text fontWeight={'bold'} fontSize={'20px'} lineHeight='60px'>Selecion de horario y equipaje</Text>
        <Square
          bg='white'
          width='100%'
          height='100px'
          borderRadius={'10px'}
        >
          <Box width={'40%'} marginLeft={3}  >
            <Flex justifyContent={'space-between'}>
              <Box marginTop={2.5}>
                <Text fontWeight={'bold'} >05:50 PM</Text>
              </Box>
              <Box width='60px' textAlign={'center'}>
                <Text fontSize={'12px'}>1h 57min</Text>
                <Image src={linea} width='100%' />
                <Text fontSize={'12px'}>Sin escala</Text>
              </Box>
              <Box marginTop={2.5}>
                <Text fontWeight={'bold'} >05:50 PM</Text>
              </Box>
            </Flex>
          </Box>
          <Box width={'70%'} margin={3}>
            <Flex gap={'5px'}>
              <Box sx={hoverStyles} borderWidth="1px" borderColor="black" width="128px" height="80px" borderRadius={3} display="flex" flexDirection="column" alignItems="center" >
                <Image src={maleta} />
                <Text textAlign='center' whiteSpace='nowrap'>1 objeto personal</Text>
                <Text fontWeight={'bold'}>$548 MXN</Text>
              </Box>
              <Box sx={hoverStyles} borderWidth="1px" borderColor="black" width="128px" height="80px" borderRadius={3} display="flex" flexDirection="column" alignItems="center" >
                <Image src={maleta} />
                <Text textAlign='center' whiteSpace='nowrap'>Equipaje de mano</Text>
                <Text fontWeight={'bold'}>$548 MXN</Text>
              </Box>
              <Box sx={hoverStyles} borderWidth="1px" borderColor="black" width="128px" height="80px" borderRadius={3} display="flex" flexDirection="column" alignItems="center" >
                <Image src={maleta} />
                <Text textAlign='center' whiteSpace='nowrap' >Equipaje 25kg</Text>
                <Text fontWeight={'bold'}>$548 MXN</Text>
              </Box>
            </Flex>
          </Box>

        </Square>
        <Square
          bg='white'
          width='100%'
          height='100px'
          borderRadius={'10px'}
          marginTop={3}
        >
          <Box width={'40%'} marginLeft={3}  >
            <Flex justifyContent={'space-between'}>
              <Box marginTop={2.5}>
                <Text fontWeight={'bold'}>05:50 PM</Text>
              </Box>
              <Box width='60px' textAlign={'center'}>
                <Text fontSize={'12px'}>1h 57min</Text>
                <Image src={linea} width='100%' />
                <Text fontSize={'12px'}>Sin escala</Text>
              </Box>
              <Box marginTop={2.5}>
                <Text fontWeight={'bold'}>05:50 PM</Text>
              </Box>
            </Flex>
          </Box>
          <Box width={'70%'} margin={3} >
            <Flex gap={'5px'} >
              <Box sx={hoverStyles} borderWidth="1px" borderColor="black" width="128px" height="80px" borderRadius={3} display="flex" flexDirection="column" alignItems="center" >
                <Image src={maleta} />
                <Text textAlign='center' whiteSpace='nowrap'>1 objeto personal</Text>
                <Text fontWeight={'bold'}>$548 MXN</Text>
              </Box>
              <Box sx={hoverStyles} borderWidth="1px" borderColor="black" width="128px" height="80px" borderRadius={3} display="flex" flexDirection="column" alignItems="center" >
                <Image src={maleta} />
                <Text textAlign='center' whiteSpace='nowrap'>Equipaje de mano</Text>
                <Text fontWeight={'bold'}>$548 MXN</Text>
              </Box>
              <Box sx={hoverStyles} borderWidth="1px" borderColor="black" width="128px" height="80px" borderRadius={3} display="flex" flexDirection="column" alignItems="center" >
                <Image src={maleta} />
                <Text textAlign='center' whiteSpace='nowrap' >Equipaje 25kg</Text>
                <Text fontWeight={'bold'}>$548 MXN</Text>
              </Box>
            </Flex>
          </Box>

        </Square>

      </Box>
      <Box width='30%' marginLeft={3} marginTop='42px' >
        <Box bg='#dedbdb' borderRadius='6px 6px 0 0' width='300px' height='30px'>
          <Text fontWeight={'bold'}> Tu reservacion</Text>
        </Box>
        <Box bg={'white'} height='150px' width='300px' borderRadius='0 0 6px 6px ' padding='8px 8px 2px 8px '  >
          <Flex justifyContent={'space-between'} fontWeight={'bold'} mb='8px' >
            <Text > Pasajeros</Text>
            <Text > 1 adulto</Text>
          </Flex>
          <Text mb='-8px' > Vuelo de salida</Text>
          <Flex fontWeight={'bold'} fontSize='25px' gap={4}>
            <Text>MEX</Text>
            <Text> ___</Text>
            <Text>CUL</Text>
          </Flex>
          <Flex gap={12}>
            <Text> 05:50 PM</Text>
            <Text> 06:47 PM</Text>
          </Flex>
          <Text fontWeight={'bold'}>Martes, 30 noviembre, 2021</Text>
        </Box>

        <Box bg='#dedbdb' borderRadius='6px 6px 0 0' marginTop='25px' width='300px' height='30px' >
          <Text fontWeight={'bold'}>Costo de vuelo</Text>
        </Box>
        <Box bg={'white'} height='150px' width='300px' borderRadius='0 0 6px 6px ' padding='8px 8px 2px 8px '  >
          <Flex justifyContent={'space-between'} mb='2'>
            <Text> Tarifa base</Text>
            <Text>$1.505 MXN</Text>
          </Flex>
          <Flex justifyContent={'space-between'} mb='1'>
            <Text> Descuento promocional</Text>
            <Text>$1.034 MXN</Text>
          </Flex>
          <Flex justifyContent={'space-between'} mb='1'>
            <Text> Tarifa base con descuento</Text>
            <Text> $471 MXN</Text>
          </Flex>
          <Flex justifyContent={'space-between'} mb='1'>
            <Text> IVA Tarifa</Text>
            <Text>$75 MXN</Text>
          </Flex>
          <Flex justifyContent={'space-between'} fontWeight={'bold'}>
            <Text>Total</Text>
            <Text> $548 MXN</Text>
          </Flex>
        </Box>
        <Button  marginTop='15px' variant='outline' h='40px' width='300px' bg='#9b2577' borderRadius={20} color='white'> Selecionar asientos</Button>


      </Box>
    </div>
  )

}

export default FlightSearch 