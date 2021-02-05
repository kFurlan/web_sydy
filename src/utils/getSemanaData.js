function getSemanaData(skip = 0) {
  const data = new Date();
  const aux = data.getDate() + skip;

  data.setDate(aux);

  const dd = String(data.getDate()).padStart(2, "0");
  const mm = String(data.getMonth() + 1).padStart(2, "0");
  const yyyy = data.getFullYear();

  return yyyy + "-" + mm + "-" + dd;
}

export default getSemanaData;
