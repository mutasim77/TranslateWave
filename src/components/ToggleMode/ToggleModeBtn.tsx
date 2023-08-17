import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'


const ToggleModeBtn = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (

        <IconButton
            sx={{ position: 'absolute' }}
            top={{ base: '58%', md: '36%', lg: '36%' }}
            right={{ base: '48.57%', md: '47.3%;', lg: '48.6%' }}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode} aria-label={''}
        />
    )
}

export default ToggleModeBtn;
