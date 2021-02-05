import useRequest from "./useRequest";
import { useMemo } from "react";
import formatDate from "../utils/getSemanaData";

function useHistoryValue() {
  const end = useMemo(() => formatDate(), []);
  const start = useMemo(() => formatDate(-7), []);

  const { data, ...rest } = useRequest(
    `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`
  );

  return { data: data?.bpi, ...rest };
}

export default useHistoryValue;
