export const getListProduct = () => {
  const res = fetch(`https://fakestoreapi.com/products`).then((res) =>
    res.json()
  );
  return res;
};
