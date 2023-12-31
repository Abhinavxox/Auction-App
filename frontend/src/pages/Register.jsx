import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { options } from "../alert/Alert";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/actions";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const submitHandler = (e) => {
    if (!name || !email || !password || !cPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== cPassword) {
      alert("Passwords do not match");
      return;
    }
    dispatch(register(name, email, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      alert("Account Created Successfully");
      navigate("/");
    }
    if (error) {
      alert(error, options);
    }
  }),
    [isAuthenticated];

  return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Register
          </h1>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
              <div class="p-2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div class="p-2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div class="p-2">
                <div class="relative">
                  <label for="password" class="leading-7 text-sm text-gray-600">
                    New Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div class="p-2">
                <div class="relative">
                  <label
                    for="c-password"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    id="c-password"
                    name="c-password"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setCPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <Link to="/login" className="text-center w-full mt-5 text-blue-500">
              Already have an account? Login Now!
            </Link>
            <div class="p-2 w-full mt-5">
              <button
                class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={() => submitHandler()}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
