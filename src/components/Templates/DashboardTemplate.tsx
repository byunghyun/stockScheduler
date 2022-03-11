import React from 'react'
import { useEffect, useRef, useState } from 'react';
import Example from '../Atoms/chart/ChartTest'
import WarehousingFlow from '../Atoms/warehousingFlow';
import DenseTable from '../Molecules/table/MainPageFooterTable';

const Dashboard = () => {
  return (
    <div className='w-full h-full'>
            <ul className='flex'>
                <li className='flex flex-col justify-between flex-1 h-[130px] text-[13px] bg-white mr-4 p-4 shadow-md rounded-lg'>
                    <p>입고</p>
                    <div>
                        <p className='text-[30px] font-semibold mb-0'>1,120</p>
                        <p className='text-[#009688]'>+18.77% 전일대비</p>
                    </div>
                </li>
                <li className='flex flex-col justify-between flex-1 h-[130px] text-[13px] bg-white mr-4 p-4 shadow-md rounded-lg'>
                    <p>출고</p>
                    <div>
                        <p className='text-[30px] font-semibold mb-0'>1,000</p>
                        <p className='text-[#ef2b2b]'>-18.77% 전일대비</p>
                    </div>
                </li>
                <li className='flex flex-col justify-between flex-1 h-[130px] text-[13px] bg-white mr-4 p-4 shadow-md rounded-lg'>
                    <p>조정</p>
                    <div>
                        <p className='text-[30px] font-semibold mb-0'>1,120</p>
                        <p className='text-[#009688]'>+18.77% 전일대비</p>
                    </div>
                </li>
                <li className='flex flex-col justify-between flex-1 h-[130px] text-[13px] bg-white p-4 shadow-md rounded-lg'>
                    <p>폐기</p>
                    <div>
                        <p className='text-[30px] font-semibold mb-0'>1,120</p>
                        <p className='text-[#009688]'>+18.77% 전일대비</p>
                    </div>
                </li>
            </ul>
            <div className='relative flex flex-row text-[13px] mt-4'>
                <div className='w-[calc(50%-8px)] bg-white p-4 mr-2 shadow-md rounded-lg'>
                    <p className='mb-4'>주간 통계</p>
                    <Example />
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
  )
}

export default Dashboard