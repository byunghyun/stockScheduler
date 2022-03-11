import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
const CalendarPage = dynamic(() => import('../Atoms/fullcalendar'), {
  ssr: false
});

const Scheduler = () => {
  return (
    <>
      {typeof window !== 'undefined' && <CalendarPage key={`calendar`}/>}
    </>
  )
}

export default Scheduler