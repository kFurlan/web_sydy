import { Moeda } from "./Moeda";
import useGetMoeda from "../hooks/useGetMoeda";
import moedas from "../enums/moedas";

function Header() {
  const { moeda, erro, isLoading } = useGetMoeda();
  if (isLoading) {
    return <h1>Carregando</h1>;
  }
  if (erro) {
    return <h1>Erro</h1>;
  }
  if (!moeda) {
    return <h1>Tente novamente</h1>;
  }
  return (
    <div className="header">
      <Moeda nome="Dólar" valor={moeda[moedas.DOLAR].rate_float} />
      <Moeda nome="Euro" valor={moeda[moedas.EURO].rate_float} />
      <Moeda nome="Libra Esterlina" valor={moeda[moedas.LIBRA].rate_float} />
    </div>
  );
}

export default Header;
