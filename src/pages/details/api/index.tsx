type TGetDetail = {
  id: string | number | undefined;
};

export const getDetailProduct = ({ id }: TGetDetail) => {
  const res = fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );

  return res;
};
