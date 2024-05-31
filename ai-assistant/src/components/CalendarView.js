import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid'; // Import dayGrid plugin
import interactionPlugin from '@fullcalendar/interaction'; // Import interaction plugin


function CalendarView({ appointments }) {
  const [calendarEvents, setCalendarEvents] = useState([]);

  // Simulate fetching appointments from an API (replace with actual API call)
  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch('/api/appointments');
      const data = await response.json();
      setCalendarEvents(data.appointments.map((appointment) => ({
        title: appointment.title,
        start: appointment.startTime,
        end: appointment.endTime,
      })));
    };
    fetchAppointments();
  }, []);

  return (
    <div className="calendar-view">
      <h2>Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]} // Register plugins
        initialView="dayGridMonth" // Initial calendar view
        events={calendarEvents} // Events data from state
        eventClick={(event) => {
          // Handle appointment click event (optional)
          console.log('Appointment clicked:', event.event);
        }}
      />
    </div>
  );
}

export default CalendarView;
