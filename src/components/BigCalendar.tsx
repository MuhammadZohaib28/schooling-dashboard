"use client";
import React, { useState } from 'react'
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"


const BigCalendar = () => {

    const [view, setView] = useState<View>(Views.WORK_WEEK)

    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView);
    }

    const localizer = momentLocalizer(moment)
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                views={['work_week', "day"]}
                view={view}
                style={{ height: "98%" }}
                onView={handleOnChangeView}
                min={new Date(2021, 10, 2, 8, 0, 0)}
                max={new Date(2021, 10, 2, 15, 0, 0)}
            />
        </div>
    )
}

export default BigCalendar


