import { Fragment, useState, useEffect } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from "@heroicons/react/outline";

const navigation = {
  pages: [
    { name: "Home", href: "/" },
    { name: "Stores", href: "/stores" },
  ],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [Login, setLogin] = useState(false);

  const logout = () => {
    localStorage.setItem("login", false);
    localStorage.removeItem("user");
    setLogin(false);
  };

  const login =  localStorage.getItem("login");

  useEffect(() => {
    setLogin(login);
    }, [login]);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div>
                  {Login ? (
                    <>
                      <div className="flow-root">
                        <Link
                          to="/dashboard"
                          className="text-sm font-medium bg-indigo-500 px-5 py-1 text-gray-100 rounded-full hover:bg-indigo-600"
                        >
                          Dashboard
                        </Link>
                      </div>
                      <div className="flow-root mt-5">
                        <button
                          onClick={logout}
                          className="text-sm font-medium bg-indigo-100 px-5 py-1 text-indigo-900 rounded-full hover:bg-indigo-200"
                        >
                          log out
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flow-root">
                      <Link
                        to="/signin"
                        className="text-sm font-medium bg-indigo-500 px-5 py-1 text-gray-100 rounded-full hover:bg-indigo-600"
                      >
                        Sign in
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  { Login  ? (
                    <>
                      <Link
                        to="/dashboard"
                        className="text-sm font-medium bg-indigo-500 px-5 py-1 text-gray-100 rounded-full hover:bg-indigo-600"
                      >
                        Dashboard
                      </Link>

                      <button
                        onClick={logout}
                        className="text-sm font-medium bg-indigo-100 px-5 py-1 text-indigo-900 rounded-full hover:bg-indigo-200"
                      >
                        log out
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/signin"
                      className="text-sm font-medium bg-indigo-500 px-5 py-1 text-gray-100 rounded-full hover:bg-indigo-600"
                    >
                      Sign in
                    </Link>
                  )}
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="/" className="group -m-2 p-2 flex items-center">
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
