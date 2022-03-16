import React, { useEffect } from "react";
import dynamic from 'next/dynamic'
import { useDashboardStore } from "../../../zustand/dashBoard";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const options = {
  chart: {
    id: "basic-bar"
  },
  xaxis: {
    categories: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일']
  }
}
const DashBoardChart = () => {
  const { weekChartData, setWeekChartData } = useDashboardStore();
  useEffect(() => {
    const seriesObject = [
      {
        name: "입고",
        data: [3, 3, 45, 4, 49, 34, 70]
      },
      {
        name: "출고",
        data: [30, 40, 5, 4, 8, 60, 44]
      },
      {
        name: "조정",
        data: [30, 2, 45, 45, 49, 44, 70]
      },
      {
        name: "폐기",
        data: [30, 6, 45, 50, 3, 22, 12]
      },
    ];
    setWeekChartData(seriesObject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={weekChartData}
            type='bar'
            width='100%'
          />
        </div>
      </div>
    </div>
  );
}

export default DashBoardChart;