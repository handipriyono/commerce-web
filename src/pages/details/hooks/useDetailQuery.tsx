import { useParams } from "react-router-dom";
import { getDetailProduct } from "../api/index";
import { useQuery } from "@tanstack/react-query";

const queryKey = "detail-product";
const useProductQuery = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [queryKey, id],
    queryFn: () => getDetailProduct({ id }),
    staleTime: 60000,
  });

  return {
    detailProduct: data,
    isLoading,
  };
};

export default useProductQuery;
