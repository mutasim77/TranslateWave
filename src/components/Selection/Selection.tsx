import { Select } from '@chakra-ui/react'
import { countries } from '../../data/intex';

interface SelectionProps {
    defaultValue: string;
    onHandleSelect: (value: string) => void
}

const Selection = ({ defaultValue, onHandleSelect }: SelectionProps) => {
    return (
        <Select
            mb={'1em'}
            defaultValue={defaultValue}
            onChange={(e) => onHandleSelect(e.target.value)}
        >
            {
                Object.entries(countries).map(([key, value], inx) => (
                    <option
                        value={key}
                        key={inx}
                    >
                        {value}
                    </option>
                ))
            }
        </Select>
    )
}

export default Selection;
