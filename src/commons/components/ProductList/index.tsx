import { useNavigate } from "react-router-dom";
import PlusMinus from "./components/PlusMinus";
import { StarIcon } from "@heroicons/react/20/solid";
import { TProductItem } from "../../types";

type TDetail = {
  data: Array<TProductItem>;
};

function classNames(...classes: Array<unknown>) {
  return classes.filter(Boolean).join(" ");
}

export default function DetailPage({ data }: TDetail) {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {(data || []).map((product) => (
            <div
              key={product?.id}
              className="relative border-b border-r border-gray-200 p-4 sm:p-6"
            >
              <div
                onClick={() => navigate(`detail/${product.id}`)}
                className="z-10 cursor-pointer aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75"
              >
                <img
                  src={product?.image}
                  alt={product?.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="pb-4 pt-10 text-center">
                <h3
                  className="cursor-pointer text-sm font-medium text-gray-900 "
                  onClick={() => navigate(`detail/${product?.id}`)}
                >
                  {product?.title}
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">
                    {product?.rating?.rate} out of 5 stars
                  </p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product?.rating?.rate > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product?.rating?.count} reviews
                  </p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">
                  ${product?.price}
                </p>
                <PlusMinus item={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
