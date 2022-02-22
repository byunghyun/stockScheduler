import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
const CalendarPage = dynamic(() => import('../components/fullcalendar'), {
    ssr: false
});

const Schedule = () => {
  const [isWindowLoad, setWindowLoad] = useState(false);
  useEffect(() => {
    setWindowLoad(true);
  }, []);
  return (
    <>
      {isWindowLoad && <CalendarPage key={`calendar`}/>}
    </>
  )
};

export default Schedule
