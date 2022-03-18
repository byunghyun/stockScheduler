import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
const CalendarPage = dynamic(() => import('../Atoms/fullcalendar'), {
  ssr: false,
});

const Scheduler = () => {
  return (
    <>{typeof window !== 'undefined' && <CalendarPage key={`calendar`} />}</>
  );
};

export default Scheduler;
