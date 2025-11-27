import TextField, { type TextFieldProps, } from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export interface SelectTextFieldsProps {
    priority: string;
    selectPriority: (priority: string) => void
}
const list = [
    {
        value: 'High',
        label: 'High',
    },
    {
        value: 'Medium',
        label: 'Medium',
    },
    {
        value: 'Low',
        label: 'Low',
    },
];

export function SelectTextFields(props: SelectTextFieldsProps & TextFieldProps) {
    return (
        <TextField
            id="outlined-select"
            select
            defaultValue="high"
            value={props.priority}
            onChange={(e) => { props.selectPriority(e.target.value) }}
            style={{ padding: "10px", width: "200px" }}
            {...props}
        >
            {list.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}
