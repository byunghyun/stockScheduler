interface outOfStockStateType {
  productName: string;
  totalStock: number;
  weeklyShipments: number;
  monthlyShipments: number;
}

interface todayMainScheduleType {
  state: string;
  text: string;
  date: number;
}

interface chartType {
  name: string;
  data: Array<number>;
}

export interface currentStatusType {
  warehousing: {
    today: number;
    yesterday: number;
  };
  shipments: {
    today: number;
    yesterday: number;
  };
  adjustment: {
    today: number;
    yesterday: number;
  };
  scrap: {
    today: number;
    yesterday: number;
  };
  [prop:string]: any;
}

export interface dashBoardType {
  outOfStockList: Array<outOfStockStateType>;
  todayMainSchedule: Array<todayMainScheduleType>;
  weekChartData: Array<todayMainScheduleType>;
  currentStatus: currentStatusType;
  setOutOfStockListData: (data: Array<outOfStockStateType>) => void;
  setTodayMainSchedule: (data: Array<todayMainScheduleType>) => void;
  setWeekChartData: (data: Array<chartType>) => void;
  setCurrentStatus: (data: currentStatusType) => void;
}