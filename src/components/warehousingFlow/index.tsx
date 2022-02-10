import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: '2022-01-17 15:30',
    description: `A하역장에서 중국 계약 물건 입고 예정`,
  },
  {
    label: '2022-01-17 16:30',
    description: `A하역장에서 중국 계약 물건 입고 예정`,
  },
  {
    label: '2022-01-17 17:30',
    description: `A하역장에서 중국 계약 물건 입고 예정`,
  },
];

const WarehousingFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className='overflow-y-auto overflow-x-visible h-full'>
      <div className='timelineItem mt-[10px]'>
        <div
          className='timelineItem-badge hover:cursor-default rounded-full'
          style={{ background: '#b0aebc', borderColor: '#b0aebc' }}
        >
          1
        </div>
        <div className='flex flex-row justify-between items-center h-[25px]'>
          <h3 className='text-[16px] mr-4 hover:cursor-default'>
            15:30 응가하기
          </h3>
        </div>
        <div className='mt-4 editor'>
          <div className='w-full h-auto max-h-[12.5rem] bg-[#f5f6fa] border-0 resize-none p-5 overflow-auto focus-visible:outline-none editor rounded-md'>
            <p
              className='text-[#b0aebc] hover:cursor-not-allowed'
              title='고객 등록 완료 메세지는 수정하실 수 없습니다.'
            >
              오늘은 꼭 응가를 해야합니다.
            </p>
          </div>
          <hr className='border-[#f5f6fa] pb-[2.5rem]' />
        </div>
      </div>
      <div className='timelineItem mt-[10px]'>
        <div
          className='timelineItem-badge hover:cursor-default rounded-full'
          style={{ background: '#b0aebc', borderColor: '#b0aebc' }}
        >
          2
        </div>
        <div className='flex flex-row justify-between items-center h-[25px]'>
          <h3 className='text-[16px] mr-4 hover:cursor-default'>
            15:30 응가하기
          </h3>
        </div>
        <div className='mt-4 editor'>
          <div className='w-full h-auto max-h-[12.5rem] bg-[#f5f6fa] border-0 resize-none p-5 overflow-auto focus-visible:outline-none editor rounded-md'>
            <p
              className='text-[#b0aebc] hover:cursor-not-allowed'
              title='고객 등록 완료 메세지는 수정하실 수 없습니다.'
            >
              오늘은 꼭 응가를 해야합니다.
            </p>
          </div>
          <hr className='border-[#f5f6fa] pb-[2.5rem]' />
        </div>
      </div>
      <div className='timelineItem mt-[10px]'>
        <div
          className='timelineItem-badge hover:cursor-default rounded-full'
          style={{ background: '#b0aebc', borderColor: '#b0aebc' }}
        >
          3
        </div>
        <div className='flex flex-row justify-between items-center h-[25px]'>
          <h3 className='text-[16px] mr-4 hover:cursor-default'>
             15:30 응가하기
          </h3>
        </div>
        <div className='mt-4 editor'>
          <div className='w-full h-auto max-h-[12.5rem] bg-[#f5f6fa] border-0 resize-none p-5 overflow-auto focus-visible:outline-none editor rounded-md'>
            <p
              className='text-[#b0aebc] hover:cursor-not-allowed'
              title='고객 등록 완료 메세지는 수정하실 수 없습니다.'
            >
              오늘은 꼭 응가를 해야합니다.
            </p>
          </div>
          <hr className='border-[#f5f6fa] pb-[2.5rem]' />
        </div>
      </div>
      <div className='timelineItem mt-[10px]'>
        <div
          className='timelineItem-badge hover:cursor-default rounded-full'
          style={{ background: '#b0aebc', borderColor: '#b0aebc' }}
        >
          4
        </div>
        <div className='flex flex-row justify-between items-center h-[25px]'>
          <h3 className='text-[16px] mr-4 hover:cursor-default'>
            15:30 응가하기
          </h3>
        </div>
        <div className='mt-4 editor'>
          <div className='w-full h-auto max-h-[12.5rem] bg-[#f5f6fa] border-0 resize-none p-5 overflow-auto focus-visible:outline-none editor rounded-md'>
            <p
              className='text-[#b0aebc] hover:cursor-not-allowed'
              title='고객 등록 완료 메세지는 수정하실 수 없습니다.'
            >
              오늘은 꼭 응가를 해야합니다.
            </p>
          </div>
          <hr className='border-[#f5f6fa] pb-[2.5rem]' />
        </div>
      </div>
    </div>  
  );
}

export default WarehousingFlow;