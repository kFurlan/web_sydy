import useHistoryValueBitcoin from "../hooks/useHistoryValueBitcoin";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { useMemo } from "react";

function Grafico() {
  const { data = {}, isLoading, erro } = useHistoryValueBitcoin();
  const dados = useMemo(() => {
    return Object.entries(data).map((item) => {
      const [dia, valueBitcoin] = item;

      return { name: dia, value: valueBitcoin };
    });
  }, [data]);

  if (isLoading) {
    return <h1>Carregando</h1>;
  }
  if (erro) {
    return <h1>Erro</h1>;
  }

  return (
    <div className="grafico">
      <LineChart width={600} height={300} data={dados}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      <label className="legenda">*valor em dólar</label>
    </div>
  );
}

export default Grafico;
