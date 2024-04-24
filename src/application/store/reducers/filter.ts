import {
  FilterAction,
  FilterState
} from "@/application/domain/entities/general";
import { FILTER_CLEAR, FILTER_DATE } from "../types/filter";

export default function reducer(state: FilterState, action: FilterAction) {
  if (action.type === FILTER_DATE) {
    return { ...state, [action.payload.action]: action.payload.date };
  }

  if (action.type === FILTER_CLEAR) {
    return { ...state, endDate: null, startDate: null, period: "" };
  }
  return state;
}
