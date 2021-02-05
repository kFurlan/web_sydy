import useRequest from "./useRequest";

function useGetMoeda() {
  const { data, ...rest } = useRequest(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );

  return {
    moeda: data?.bpi,
    ...rest,
  };
}

export default useGetMoeda;
