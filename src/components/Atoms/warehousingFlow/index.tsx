import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import dayjs from 'dayjs';
import React, { ReactElement, useEffect, useState } from 'react';

import { useDashboardStore } from '../../../zustand/dashBoard';

const rows = [
  { state: 'late', text: 'Create a services site', date: new Date().valueOf() },
  {
    state: 'schedule',
    text: 'Create a services site',
    date: new Date().valueOf(),
  },
  {
    state: 'pending',
    text: 'Create a services site',
    date: new Date().valueOf(),
  },
  {
    state: 'completed',
    text: 'Create a services site',
    date: new Date().valueOf(),
  },
  {
    state: 'reject',
    text: 'Create a services site',
    date: new Date().valueOf(),
  },
];

interface returnStylesType {
  color?: string;
  dot?: ReactElement<any, any>;
}

const WarehousingFlow = () => {
  const { todayMainSchedule, setTodayMainSchedule } = useDashboardStore();
  useEffect(() => {
    setTodayMainSchedule(rows);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='overflow-y-auto overflow-x-visible h-full p-2'>
      <Timeline>
        {todayMainSchedule.map((items, index) => {
          const returnStyles: returnStylesType = {};
          switch (items.state) {
            case 'late':
              returnStyles.color = 'red';
              returnStyles.dot = (
                <ClockCircleOutlined className='timeline-clock-icon' />
              );
              break;
            case 'schedule':
              returnStyles.color = 'gray';
              break;
            case 'pending':
              returnStyles.color = 'green';
              break;
            case 'completed':
              returnStyles.color = 'blue';
              break;
            case 'reject':
              returnStyles.color = 'red';
              break;
          }
          return (
            <Timeline.Item key={index.toString()} {...returnStyles}>
              <p>{dayjs(items.date).format('HH:MM:ss')}</p>
              <p>{items.text}</p>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </div>
  );
};

export default WarehousingFlow;
