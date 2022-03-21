import React from 'react';
import { useEffect, useRef, useState } from 'react';

import { useDashboardStore } from '../../zustand/dashBoard';
import DashBoardChart from '../Atoms/chart/DashBoardChart';
import WarehousingFlow from '../Atoms/warehousingFlow';
import DenseTable from '../Molecules/table/MainPageFooterTable';

const Dashboard = () => {
  const { currentStatus, setCurrentStatus } = useDashboardStore();
  useEffect(() => {
    const currentStatusList = {
      warehousing: {
        today: 10,
        yesterday: 5,
      },
      shipments: {
        today: 5,
        yesterday: 10,
      },
      adjustment: {
        today: 0,
        yesterday: 0,
      },
      scrap: {
        today: 0,
        yesterday: 0,
      },
    };
    setCurrentStatus(currentStatusList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='w-full h-full'>
      <ul className='flex'>
        {Object.keys(currentStatus).map((items, index) => {
          const resultData = {
            title: '',
            percenter: 0,
            sign: '',
          };
          switch (items) {
            case 'warehousing':
              resultData.title = '입고';
              resultData.percenter =
                (currentStatus[items].today / currentStatus[items].yesterday) *
                100;
              resultData.sign = !(
                currentStatus[items].today / currentStatus[items].yesterday
              )
                ? ''
                : currentStatus[items].today / currentStatus[items].yesterday >=
                  1
                ? '+'
                : '-';
              break;
            case 'shipments':
              resultData.title = '출고';
              resultData.percenter =
                (currentStatus[items].today / currentStatus[items].yesterday) *
                100;
              resultData.sign = !(
                currentStatus[items].today / currentStatus[items].yesterday
              )
                ? ''
                : currentStatus[items].today / currentStatus[items].yesterday >=
                  1
                ? '+'
                : '-';
              break;
            case 'adjustment':
              resultData.title = '조정';
              resultData.percenter =
                (currentStatus[items].today / currentStatus[items].yesterday) *
                100;
              resultData.sign = !(
                currentStatus[items].today / currentStatus[items].yesterday
              )
                ? ''
                : currentStatus[items].today / currentStatus[items].yesterday >=
                  1
                ? '+'
                : '-';
              break;
            case 'scrap':
              resultData.title = '폐기';
              resultData.percenter =
                (currentStatus[items].today / currentStatus[items].yesterday) *
                100;
              resultData.sign = !(
                currentStatus[items].today / currentStatus[items].yesterday
              )
                ? ''
                : currentStatus[items].today / currentStatus[items].yesterday >=
                  1
                ? '+'
                : '-';
              break;
          }
          return (
            <li
              key={index.toString()}
              className={
                'flex flex-col justify-between flex-1 h-[130px] text-[13px] bg-white p-4 shadow-md rounded-lg' +
                (index !== Object.keys(currentStatus).length - 1 ? ' mr-4' : '')
              }
            >
              <p>{resultData.title}</p>
              <div>
                <p className='text-[30px] font-semibold mb-0'>
                  {currentStatus[items].today}
                </p>
                <p
                  className={
                    resultData.sign === '+'
                      ? `text-[#009688]`
                      : resultData.sign === '-'
                      ? `text-[#db5050]`
                      : `text-[#525252]`
                  }
                >
                  {resultData.sign}
                  {Math.round(resultData.percenter)
                    ? `${Math.round(resultData.percenter)}%`
                    : '0%'}{' '}
                  전일대비
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className='relative flex flex-row text-[13px] mt-4'>
        <div className='w-[calc(50%-8px)] bg-white p-4 mr-2 shadow-md rounded-lg'>
          <p className='mb-4'>주간 통계</p>
          <DashBoardChart />
        </div>
        <div className='absolute ml-2 right-0 w-[calc(50%-8px)] h-full bg-white p-4 shadow-md rounded-lg overflow-hidden'>
          <p className='mb-4'>오늘 주요 일정</p>
          <div className='h-[calc(100%-35.5px)] overflow-auto pt-[20px]'>
            <WarehousingFlow />
          </div>
        </div>
      </div>
      <div className='w-full p-4 bg-white shadow-md rounded-lg mt-4'>
        <p className='mb-4 text-[13px]'>재고 부족 알림</p>
        <DenseTable />
      </div>
    </div>
  );
};

export default Dashboard;
