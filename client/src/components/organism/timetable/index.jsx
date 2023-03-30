import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import style from './timetable.module.scss'
moment.locale('ko-KR')
const localizer = momentLocalizer(moment)

const TimeTalbe = () => {
  return (
    <div className={style.calendar__wrap}>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
      />
    </div>
  )
}

export default TimeTalbe
