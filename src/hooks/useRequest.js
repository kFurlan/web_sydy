import { useState, useEffect } from "react";

function useRequest(endpoint) {
  const [data, setData] = useState();
  const [erro, setErro] = useState();
  const [isLoading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw Error("Tente novamente");
        }

        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((erro) => {
        setErro(erro);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    erro,
    isLoading,
  };
}

export default useRequest;
