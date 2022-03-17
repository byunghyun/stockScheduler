import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { useRef } from 'react';

const Calendar = () => {
  const calendarRef = useRef(null);
  const handleClick = {
    scheduleSelect: (event: any) => {
      console.log(event);
    },
    dataSelect: (event: any) => {
      console.log(event);
    },
  };
  const handleMouseEnter = {
    scheduleHover: (event: any) => {
      // console.log(event)
    },
  };
  const handleMouseLeave = {
    scheduleLeave: (event: any) => {
      // console.log('scheduleLeave', event);
    },
  };
  return (
    <div className='h-full'>
      <FullCalendar
        ref={calendarRef}
        timeZone='Asia/Seoul'
        schedulerLicenseKey={'CC-Attribution-NonCommercial-NoDerivatives'}
        plugins={[resourceTimeGridPlugin, interactionPlugin]}
        initialView={'resourceTimeGrid'}
        nowIndicator={true}
        editable={true}
        locale={'ko'}
        slotDuration={'00:30:00'}
        slotMinTime={'09:00:00'}
        slotMaxTime={'18:30:00'}
        // selectMinDistance={50}
        expandRows={true}
        allDaySlot={false}
        eventClick={handleClick.scheduleSelect}
        dateClick={handleClick.dataSelect}
        // headerToolbar={{
        //   left: 'today, prev ,next',
        //   center: 'title',
        //   right:
        //     'resourceTimeGridDay, resourceTimeGridTenDay, resourceTimeGridMonth, resourceTimeGridYear',
        // }}
        headerToolbar={{
          start: 'title',
          center: '',
          end: 'today prev,next',
        }}
        eventMouseEnter={handleMouseEnter.scheduleHover}
        eventMouseLeave={handleMouseLeave.scheduleLeave}
        slotLabelFormat={[
          {
            hour: '2-digit',
            minute: '2-digit',
            meridiem: 'short',
          },
        ]}
        slotLabelInterval={'00:30:00'}
        height={'100%'}
        initialEvents={[
          {
            title: 'nice event',
            start: new Date('2022-02-22 21:00:00'),
            end: new Date('2022-02-22 22:00:00'),
            resourceId: 'receiving',
          },
        ]}
        // scrollTime='22:00'
        events={[{ title: 'event 1', date: new Date('2022-02-22') }]}
        selectable
        resourceAreaHeaderContent='Rooms'
        resources={[
          {
            id: 'receiving',
            title: '입고',
            businessHours: {
              // daysOfWeek: [ 1, 2, 3 ], // Monday, Tuesday, Wednesday
              startTime: '10:00',
              endTime: '18:00',
            },
          },
          {
            id: 'forwarding',
            title: '출고',
            businessHours: {
              // daysOfWeek: [ 1, 2, 3 ], // Monday, Tuesday, Wednesday
              startTime: '10:00',
              endTime: '18:00',
            },
          },
        ]}
      />
    </div>
  );
};

export default Calendar;
