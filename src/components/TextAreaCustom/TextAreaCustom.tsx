import { Box, Select, Textarea } from '@chakra-ui/react'
import { useState } from 'react';

const TextAreaCustom = () => {
    const [userInput, setUserInput] = useState<string>('');

    const onHandleChange = (value: string) => {
        setUserInput(value);
    }

    return (
        <Box as='div' display={'flex'} justifyContent={'space-between'} gap={'2em'} mt={'2em'}>
            <Box flex={'1'}>
                <Select placeholder='Select option'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Textarea
                    size='lg'
                    value={userInput}
                    borderWidth={'2px'}
                    mt={'1em'}
                    rows={10}
                    onChange={(e) => onHandleChange(e.target.value)}
                    placeholder='Your text here'
                />
            </Box>

            <Box flex={'1'}>
                <Select placeholder='Select option'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Textarea
                    isReadOnly
                    size='lg'
                    rows={10}
                    borderWidth={'2px'}
                    mt={'1em'}
                    placeholder='Translated text'
                />
            </Box>
        </Box>

    )
}

export default TextAreaCustom;
