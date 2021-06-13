
import { FormControl, Select, InputLabel, MenuItem } from '@material-ui/core'

type propsCheck = {
    value: number
    handleCountDisply: Function
}


export default function CountDisplyUser({ value, handleCountDisply }: propsCheck): JSX.Element {

    const MenuItemArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
        <FormControl style={{ minWidth: '120px' }} >
            <InputLabel id="demo-simple-select-label">CountDisplyUser</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={e => handleCountDisply(e)}
            >
                {
                    MenuItemArry.map(item => <MenuItem key={item.toString()} value={item}>{item}</MenuItem>)
                }


            </Select>
        </FormControl>
    )
}
