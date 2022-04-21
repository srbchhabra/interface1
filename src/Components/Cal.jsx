//import React from 'react'
import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import "./style.css"

function Cal() {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
      setDateState(e)}
  return (
    <div>Calendar
        <>
        <div className="calndar">
      <Calendar 
      value={dateState}
      onChange={changeDate}
      />
    <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
    </div>
    </>
    </div>
    
  )
}


export default Cal