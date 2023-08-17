import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'


const ToggleModeBtn = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode} aria-label={''}
        />
    )
}

export default ToggleModeBtn;
