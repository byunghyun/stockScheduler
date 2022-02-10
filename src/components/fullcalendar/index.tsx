import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { useRef } from "react";

const Calendar = () => {
  const calendarRef = useRef(null);
  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        timeZone='UTC'
        schedulerLicenseKey={'CC-Attribution-NonCommercial-NoDerivatives'}
        plugins={[resourceTimeGridPlugin, interactionPlugin]}
        initialView={'resourceTimeGrid'}
        headerToolbar={{
          left: 'today, prev ,next',
          center: 'title',
          right:
            'resourceTimeGridDay, resourceTimeGridTenDay, resourceTimeGridMonth, resourceTimeGridYear',
        }}
        scrollTime='08:00'
        events={[
          { title: 'event 1', date: '2022-02-11' },
          { title: 'event 2', date: '2022-02-12' },
        ]}
        views={{
          resourceTimelineFourDays: {
            type: 'resourceTimeGrid',
            duration: { days: 4 },
          },
          resourceTimelineDay: {
            buttonText: ':15 slots',
            slotDuration: '00:15',
          },
          resourceTimelineTenDay: {
            type: 'resourceTimeGrid',
            duration: { days: 10 },
            buttonText: '10 days',
          },
        }}
        editable
        selectable
        resourceAreaHeaderContent="Rooms"
        resources={
          [
            {
              id: 'a',
              title: 'wef22',
            },
            {
              id: 'b',
              title: 'wef11',
            }
          ]
        }
      />
    </div>
  );
};

export default Calendar;
