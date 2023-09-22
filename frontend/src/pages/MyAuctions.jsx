import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuctions, endAuction } from "../actions/actions";
import { Link } from "react-router-dom";

const MyAuctions = () => {
  const dispatch = useDispatch();
  const { auctions, loading, error } = useSelector((state) => state.auctions);
  const { loadingEnd, errorEnd, successEnd } = useSelector(
    (state) => state.endAuction
  );
  const { user } = useSelector((state) => state.user);

  const [data, setData] = useState([]);
  const [category, setCategory] = useState("ALL");

  useEffect(() => {
    dispatch(getAuctions());
  }, [dispatch]);

  useEffect(() => {
    if (auctions) {
      setData(auctions.filter((item) => item.user_id === user.id));
    }
  }, [auctions, user.id]);

  const handleEndAuction = (id) => {
    dispatch(endAuction(id));
  };

  useEffect(() => {
    if (!loadingEnd) {
      alert("Auction ended successfully");
      dispatch(getAuctions());
    }
  }, [loadingEnd, successEnd, dispatch]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="w-full flex justify-between text-2xl uppercase font-bold mb-16">
              <p>MY AUCTIONS</p>
            </div>
            <div className="flex flex-wrap -m-4">
              {data.map((item) =>
                item.ended ? (
                  <>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.id}>
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
                          <button
                            className="border-2 p-3 w-full text-center rounded-xl bg-gray-700 text-white transition duration-300 ease-in-out"
                            onClick={() => {
                              handleEndAuction(item.id);
                            }}
                          >
                            ENDED
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.id}>
                    <Link
                      to={`/auctions/${item.id}`} // Replace with your auction details route
                      className="block relative h-48 rounded overflow-hidden"
                    >
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={item.item.image}
                      />
                    </Link>
                    <div className="mt-4 relative h-[16vh]">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <div className="mt-1 flex justify-between absolute bottom-0 w-full">
                        <button
                          className="border-2 p-3 w-full text-center rounded-xl hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
                          onClick={() => {
                            handleEndAuction(item.id);
                          }}
                        >
                          END AUCTION
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MyAuctions;
