import {
  BellIcon,
  CreditCardIcon,
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import Header from "../../commons/components/Header";
import Footer from "../../commons/components/Footer";
import OderHistory from "../../commons/components/OrderHistory/index";

const sidebarNav = [
  { name: "General", href: "#", icon: UserCircleIcon, current: true },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Logout", href: "#", icon: PowerIcon, current: false, id: "signout" },
];

type TLabel = {
  title: string;
  value?: string;
};

export const LabelField = ({ title, value = "-" }: TLabel) => {
  return (
    <div className="pt-6 sm:flex">
      <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
        {title}
      </dt>
      <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
        <div className="text-gray-900">{value}</div>
        <button
          type="button"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Update
        </button>
      </dd>
    </div>
  );
};

function classNames(...classes: Array<unknown>) {
  return classes.filter(Boolean).join(" ");
}

export default function Profiles() {
  const onLogout = (id: string | undefined) => {
    if (id === "signout") {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };
  return (
    <>
      <div className="relative bg-gray-900">
        <Header />
      </div>
      <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
        <h1 className="sr-only">General Settings</h1>

        <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
          <nav className="flex-none px-4 sm:px-6 lg:px-0">
            <ul
              role="list"
              className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
            >
              {sidebarNav.map((item) => (
                <li key={item.name}>
                  <a
                    role="button"
                    onClick={() => onLogout(item?.id)}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-indigo-600"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-indigo-600"
                          : "text-gray-400 group-hover:text-indigo-600",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <LabelField title="Company Name" value="PT Gelora Perkasa" />
                <LabelField title="Email Address" />
                <LabelField title="Username" />
              </dl>
            </div>

            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Address
              </h2>
              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <LabelField
                  title="Address 1"
                  value="Jl. Kenanga baturaden 12, Jakarta Barat"
                />
              </dl>
            </div>

            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Company Information
              </h2>
              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <LabelField title="Status" value="Active" />
                <LabelField title="Bank Account" value="09000222222 ( BCA ) " />
              </dl>
            </div>
          </div>
        </main>
      </div>

      <OderHistory />
      <Footer />
    </>
  );
}
