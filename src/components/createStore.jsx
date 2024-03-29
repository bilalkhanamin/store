import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Alert from "./Alert";
import FileBase64 from "react-file-base64";

export default function createStore() {
  const [ownerInfo, setOwnerInfo] = useState({});
  const [storeInfo, setStoreInfo] = useState({});
  const [message, setmessage] = useState({ is: false, msg: "" });
  const [response, setresponse] = useState();
  const handleOwnerInfo = (e) => {
    setOwnerInfo({ ...ownerInfo, [e.target.name]: e.target.value });
  };
  const handleStoreInfo = (e) => {
    setStoreInfo({ ...storeInfo, [e.target.name]: e.target.value });
  };

  const data = { ...ownerInfo, storeInfo };

  const AddStore = () => {
    const baseURL = "https://my-store545.herokuapp.com/createstore";
    let config = { headers: { "Content-Type": "application/json" } };
    try {
      axios.post(baseURL, data, config).then((res) => {
        setresponse(res.data);
        setmessage({
          is: true,
          msg: "Store created successfully",
        });
        localStorage.setItem("login", true);
        window.localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "/dashboard";
      });
    } catch (error) {
      console.log("error:" + error);
    }
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddStore();
    console.log(data);
    return;
  };

  return (
    <>
      {message.is ? <Alert message={message.msg} /> : null}
      {/* Owner informations */}
      <div className="mt-10 sm:mt-0 px-20 py-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Owner Account
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                You will login to your store using these credentials.
              </p>
            </div>
          </div>

          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        required
                        onChange={handleOwnerInfo}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        onChange={handleOwnerInfo}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="name"
                        autoComplete="name"
                        required
                        onChange={handleOwnerInfo}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      {/* Store informations */}
      <div className="mt-10 sm:mt-0 px-20 py-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Store informations
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter your store informations
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Store name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        placeholder="Your store name"
                        required
                        onChange={handleStoreInfo}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        autoComplete="location"
                        placeholder="Your store location"
                        onChange={handleStoreInfo}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="storeType"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Store type
                      </label>
                      <select
                        id="storeType"
                        name="storeType"
                        autoComplete="store-type"
                        required
                        onChange={handleStoreInfo}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>select</option>
                        <option value={`Mobile Accessories`}>
                          Mobile Accessories
                        </option>
                        <option value={`Garments`}>Garments</option>
                        <option value={`Grocries`}>Grocries</option>
                      </select>
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <textarea
                        type="text"
                        name="Description"
                        id="Description"
                        autoComplete="Description"
                        placeholder="About your store ..."
                        required
                        onChange={handleStoreInfo}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cover Image URL
                      </label>
                      <input
                        type="text"
                        name="coverPhoto"
                        id="coverPhoto"
                        autoComplete="coverPhoto"
                        placeholder="Image URL"
                        required
                        onChange={handleStoreInfo}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div> */}
                  </div>

                  <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <FileBase64
                              multiple={false}
                              onDone={({ base64 }) =>
                                setStoreInfo({
                                  ...storeInfo,
                                  coverPhoto: base64,
                                })
                              }
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG only</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create store
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
