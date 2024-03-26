import { ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import useCart from "../../stores/cart";

const Header = () => {
  const navigate = useNavigate();
  const cart = useCart((state) => state.cart);

  const totalCart = () => {
    try {
      return Object.values(cart)?.length;
    } catch (error) {
      return 0;
    }
  };

  const isLoggedIn = () => {
    return localStorage.getItem("token");
  };

  const onClickProfile = () => {
    const jwtCheck = localStorage.getItem("token");
    if (jwtCheck) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <header className="relative z-10">
        <nav>
          <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div>
                <div className="flex h-16 items-center justify-between">
                  <div className="lg:flex lg:flex-1 lg:items-center flex-row">
                    <div
                      className="cursor-pointer flex-row"
                      onClick={() => navigate("/")}
                    >
                      <img className="h-8 w-auto" src="/chrome.png" alt="" />
                    </div>
                    <div
                      className="cursor-pointer"
                      style={{ color: "#fff", marginLeft: "10px" }}
                      onClick={() => navigate("/")}
                    >
                      Commerce
                    </div>
                  </div>

                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <a
                        onClick={() => navigate("/profile")}
                        className="p-2 text-white lg:hidden"
                      >
                        <UserIcon className="h-6 w-6" aria-hidden="true" />
                      </a>
                      <a
                        onClick={onClickProfile}
                        className="cursor-pointer hidden text-sm font-medium text-white lg:block"
                      >
                        {isLoggedIn() ? "My Profile" : "Login"}
                      </a>

                      <div className="ml-4 flow-root lg:ml-8 cursor-pointer">
                        <div className="-m-2 flex items-center p-2 ">
                          <ShoppingBagIcon
                            className="h-6 w-6 flex-shrink-0 text-white"
                            aria-hidden="true"
                          />
                          <span className="ml-2 text-sm font-medium text-white">
                            {totalCart()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
