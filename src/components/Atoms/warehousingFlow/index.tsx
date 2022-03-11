import React, { useState } from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

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
    <div className='overflow-y-auto overflow-x-visible h-full p-2'>
      <Timeline>
        <Timeline.Item color='red'>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item color='green'>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </div>  
  );
}

export default WarehousingFlow;