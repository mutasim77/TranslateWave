import Header from "../Header/Header";
import TextAreaCustom from "../TextAreaCustom/TextAreaCustom";
import ToggleModeBtn from "../ToggleMode/ToggleModeBtn";
import { Container, Heading, Text } from '@chakra-ui/react'
const App = () => {
  return (
    <>
      <Header />
      <Container maxW="1200px">
        <Container mt={'2em'} textAlign={'center'}>
          <Heading letterSpacing={'3px'}>TranslateWave 🌍</Heading>
          <Text letterSpacing={'2px'} mt={'1em'}>Where Words Find Common Ground</Text>
        </Container>
        <TextAreaCustom />
        <ToggleModeBtn />
      </Container >
    </>
  )
}

export default App;
