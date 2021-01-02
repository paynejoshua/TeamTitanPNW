import {React, useState} from "react"
import Calendar from "react-calendar"



function CalendarComponent(){

   const [value, onChange] = useState(new Date())


    return (
        <div>
           <Calendar calendarType="US" className="react-calendar" onChange={onChange}
           value={value}
           />
        </div>
    )

}

export default CalendarComponent