import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Alert from "./Alert";

export default function SignIn() {
  const [user, setUser] = useState();
  const [message, setmessage] = useState();
  const [login, setLogin] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signInToStore = (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "application/json" } };
    const baseURL = "https://my-store545.herokuapp.com/signin";
    try {
      axios.post(baseURL, user, config).then((res) => {
        if (res.data.login == true) {
          setmessage(res.data.message);
          setLogin(true);
          localStorage.setItem("login", true);
          window.localStorage.setItem("user", JSON.stringify(res.data.user))
          window.location.href = "/dashboard";
          console.log(res.data)
        } else if (res.login == false) {
          setmessage(res.data.message);
          window.location.href = "/signin";
        }
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {login == true ? <Alert message={message} /> : null}
      <div className="w-full flex justify-center mt-20">
        <div class="flex flex-col w-full max-w-md px-4 py-8   rounded-lg shadow-xl border border-transparent  sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl ">
            Sign in to your store
          </div>

          <div class="mt-8">
            <form onSubmit={signInToStore} autoComplete="on">
              <div class="flex flex-col mb-2">
                <div class="flex relative ">
                  <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                    </svg>
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600  focus:border-transparent"
                    placeholder="Your email"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <div class="flex relative ">
                  <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                    </svg>
                  </span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600  focus:border-transparent"
                    placeholder="Your password"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="flex w-full">
                <button
                  type="submit"
                  class="py-2 px-4  bg-indigo-600  hover:bg-indigo-700  focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div class="flex items-center justify-center mt-6">
            <>
              <Link
                to="/createstore"
                 class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700:text-gray-100:hover:text-white"
              >
                <span class="ml-2">You don&#x27;t have a store?</span>
              </Link>
            </>
          </div>
        </div>
      </div>
    </>
  );
}
