import React from "react";
import { useLocation } from "react-router-dom";

const Auction = () => {
  const location = useLocation();
  const auction = location.state;
  console.log(auction);
  return (
    <>
      {!auction ? (
        <>Go back and come to this page</>
      ) : (
        <>
          <section class="text-gray-600 body-font">
            <h1 className="text-xl font-bold uppercase text-center mt-14">
              {auction.title}
            </h1>
            <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
              <div class="md:w-3/5 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                <div className=" flex justify-center">
                  <img src={auction.item.image} className="w-[500px]" />
                </div>
                <div tabIndex={0} className="collapse ">
                  <div className="collapse-title text-xl font-medium">
                    Click here for Details
                  </div>
                  <div className="collapse-content">
                    <p>{JSON.stringify(auction)}</p>
                  </div>
                </div>
              </div>
              <div className="w-[38%] mx-2">
                <div className="my-5">
                  <h1 className="w-full text-center text-xl">Previous Bids</h1>
                  <div className="border-gray-400 border-2 w-full h-96 my-2 rounded-lg overflow-y-scroll">
                    {JSON.parse(auction.bids).map((bid) => (
                      <div className="chat chat-start">
                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img
                              className="w-full h-full"
                              src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=826&t=st=1695364724~exp=1695365324~hmac=65336395f6e184e8ed111868a434573af42850c58c14107dbab61b895718941f"
                            />
                          </div>
                        </div>
                        <div className="chat-header">{bid.user}</div>
                        <div className="chat-bubble">${bid.bid_amount}</div>
                        <div className="chat-footer opacity-50">Bid</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Enter amount</span>
                    </label>
                    <label className="input-group">
                      <span>Price ($)</span>
                      <input
                        type="text"
                        placeholder="1000"
                        className="input input-bordered"
                      />
                    </label>
                  </div>
                  <div className="flex items-end">
                    <button className="h-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 text-center">
                      BID
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Auction;
