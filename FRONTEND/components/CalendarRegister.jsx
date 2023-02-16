import { React ,  useState } from 'react'
import { View, Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

const CalendarRegister = ({ date, setDate, buttonTitle, setButtonTitle }) => {
    const [open, setOpen] = useState(false)
    return (
        <View>
            <Button title={buttonTitle} onPress={() => setOpen(true)} />
            <DatePicker
                modal
                locale='es_ES'
                mode='date'
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    setButtonTitle(date.toLocaleString("fr-FR").split(',')[0])
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
}

export default CalendarRegister;