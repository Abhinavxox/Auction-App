import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuctions } from "../actions/actions";

const Auctions = () => {
  const dispatch = useDispatch();
  const { auctions, loading, error } = useSelector((state) => state.auctions);
  const [data, setData] = React.useState([]);

  const [category, setCategory] = React.useState("ALL");

  useEffect(() => {
    dispatch(getAuctions());
  }, [dispatch]);

  useEffect(() => {
    if (category === "ALL") {
      setData(auctions);
    } else {
      setData(auctions.filter((item) => item.category === category));
    }
  }, [category, auctions]);

  return (
    <div>
      {loading && data ? (
        <>Loading...</>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="w-full flex justify-between text-2xl uppercase font-bold mb-16">
              <p>CURRENT AUCTIONS</p>
              <div className="ml-2 mb-6">
                {/* item category */}
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option disabled selected>
                    Category ALL
                  </option>
                  <option>Painting</option>
                  <option>Sculpture</option>
                  <option>Photographic Image</option>
                  <option>Carving</option>
                  <option>Drawing</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap -m-4">
              {data.map((item) => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={item.item.image}
                    />
                  </a>
                  <div className="mt-4 relative h-[16vh]">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {item.item.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.title}
                    </h2>
                    <div className="mt-1 flex justify-between absolute bottom-0 w-full">
                      <Link
                        state={item}
                        className="border-2 p-3 w-full text-center rounded-xl hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
                        to={`/auction/${item.id}/`}
                      >
                        BID
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Auctions;
