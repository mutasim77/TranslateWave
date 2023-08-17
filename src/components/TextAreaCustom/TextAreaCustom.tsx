import { Box, Textarea } from '@chakra-ui/react'
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import Selection from '../Selection/Selection';
import { useDebounce } from '../../hooks/useDebounce';

const TextAreaCustom = () => {
    const [userInput, setUserInput] = useState<string>('');
    const [translatedText, setTranslatedText] = useState<string>('');
    const [translateFrom, setTranslateFrom] = useState<string>('en-GB');
    const [translateTo, setTranslateTo] = useState<string>('ru-RU');

    //! Here i'm using Debounce to prevent quickly qpi calls
    const debouncedValue = useDebounce<string>(userInput, 500)

    const handleChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value)
    }


    //! Fetching API
    useEffect(() => {




        console.log(`DEBAG: useInput: ${userInput} from: ${translateFrom} to ${translateTo}`);
        //? result from api
        setTranslatedText(userInput)


        // eslint-disable-next-line
    }, [debouncedValue, translateFrom, translateTo])


    return (
        <Box as='div' display={'flex'} justifyContent={'space-between'} gap={'2em'} mt={'2em'}>
            <Box flex={'1'}>
                <Selection defaultValue='en-GB' onHandleSelect={setTranslateFrom} />
                <Textarea
                    value={userInput}
                    size='lg'
                    borderWidth={'2px'}
                    rows={10}
                    onChange={handleChange}
                    placeholder='Your text here'
                />
            </Box>
            <Box flex={'1'}>
                <Selection defaultValue='ru-RU' onHandleSelect={setTranslateTo} />
                <Textarea
                    isReadOnly
                    size='lg'
                    rows={10}
                    borderWidth={'2px'}
                    placeholder='Translated text'
                    defaultValue={translatedText}
                />
            </Box>
        </Box>

    )
}

export default TextAreaCustom;
