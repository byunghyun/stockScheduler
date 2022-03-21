import produce from 'immer';
import _ from 'lodash';
import create from 'zustand';

import { dashBoardType } from './types';

export const useDashboardStore = create<dashBoardType>((set) => ({
  outOfStockList: [],
  todayMainSchedule: [],
  weekChartData: [],
  currentStatus: {
    warehousing: {
      today: 0,
      yesterday: 0,
    },
    shipments: {
      today: 0,
      yesterday: 0,
    },
    adjustment: {
      today: 0,
      yesterday: 0,
    },
    scrap: {
      today: 0,
      yesterday: 0,
    },
  },
  setOutOfStockListData: (data) =>
    set(
      produce((draft) => {
        if (_.isArray(data)) draft.outOfStockList = data;
      }),
    ),
  setTodayMainSchedule: (data) =>
    set(
      produce((draft) => {
        if (_.isArray(data)) draft.todayMainSchedule = data;
      }),
    ),
  setWeekChartData: (data) =>
    set(
      produce((draft) => {
        if (_.isArray(data)) draft.weekChartData = data;
      }),
    ),
  setCurrentStatus: (data) =>
    set(
      produce((draft) => {
        if (_.isObject(data)) draft.currentStatus = data;
      }),
    ),
}));
