import { CheckIcon, StarIcon } from "@heroicons/react/20/solid";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { TagIcon } from "@heroicons/react/20/solid";
import PlusMinus from "../../../commons/components/ProductList/components/PlusMinus";
import { TProductItem } from "../../../commons/types";

type TItem = {
  data: TProductItem;
};

function classNames(...classes: Array<unknown>) {
  return classes.filter(Boolean).join(" ");
}

export default function Detail({ data }: TItem) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <div className="flex items-center">
              <TagIcon
                className={classNames(
                  "text-gray-200 h-5 w-5 flex-shrink-0 mr-1"
                )}
                aria-hidden="true"
              />
              <a
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {data?.category}
              </a>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data?.title}
            </h1>
          </div>

          <section className="mt-4">
            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">${data?.price}</p>

              <div className="ml-4 border-l border-gray-300 pl-4">
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            data?.rating?.rate > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    {data?.rating?.count} reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500 ">{data?.description}</p>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon
                className="h-5 w-5 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-2 text-sm text-gray-500">
                In stock and ready to ship
              </p>
            </div>
          </section>
        </div>

        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <img
              src={data?.image}
              alt={data?.title}
              className="h-full w-full object-cover object-center m-4 p-5"
            />
          </div>
        </div>

        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <form>
              <div className="mt-10">
                <PlusMinus item={data} />
              </div>
              <div className="mt-6 text-center">
                <a
                  role="button"
                  className="group inline-flex text-base font-medium"
                >
                  <ShieldCheckIcon
                    className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500 hover:text-gray-700">
                    Lifetime Guarantee
                  </span>
                </a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
