import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuctionDetails, newBid } from "../actions/actions";

const Auction = () => {
  const location = useLocation();
  const auction_id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { auction, loading, error } = useSelector(
    (state) => state.auctionDetails
  );
  const { user } = useSelector((state) => state.user);
  const { loadingBid, errorBid, successBid } = useSelector(
    (state) => state.bid
  );

  const [loadingCustom, setLoadingCustom] = useState(false);

  const [bid, setBid] = useState(0);

  const handleBid = () => {
    if (bid > parseInt(auction.highest_bid)) {
      const bidData = {
        bid_amount: parseInt(bid).toFixed(2),
        user: user.id,
        auction: auction.id,
      };

      console.log(bidData);
      dispatch(newBid(bidData));
    } else {
      alert("Bid must be greater than current bid");
    }
  };

  useEffect(() => {
    if (!loadingBid) {
      dispatch(getAuctionDetails(auction_id));
    }
  }, [loadingBid, successBid]);

  useEffect(() => {
    dispatch(getAuctionDetails(auction_id));
  }, [dispatch, auction_id]);

  useEffect(() => {
    if (auction) {
      setLoadingCustom(true);
    }
  }, [auction]);

  // Parse the bids if it's a string, or leave it as an empty array if it's already an array
  const parsedBids = Array.isArray(auction.bids)
    ? auction.bids
    : JSON.parse(auction.bids || "[]");

  return (
    <>
      {loadingCustom ? (
        <section className="text-gray-600 body-font">
          <h1 className="text-xl font-bold uppercase text-center mt-14">
            {auction.title}
          </h1>
          <div className="container flex flex-wrap px-5 pb-24 pt-10 mx-auto items-center">
            <div className="md:w-3/5 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
              <div className="flex justify-center">
                {auction.item && auction.item.image && (
                  <img
                    src={auction.item.image}
                    className="w-[500px]"
                    alt="Auction Item"
                  />
                )}
              </div>
              <div tabIndex={0} className="collapse ">
                <div className="collapse-title text-xl font-medium">
                  Click here for Details
                </div>
                <div className="collapse-content">
                  <div className="p-4 border border-gray-300 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">{auction.title}</h2>
                    <p className="text-gray-600">{`Estimated Price: $${auction.estimated_price}`}</p>
                    <p className="text-gray-600">{`Location: ${auction.location}`}</p>
                    <p className="text-gray-600">{`Auction Date: ${auction.auction_date} (${auction.auction_period})`}</p>
                    <p className="text-gray-600">{`Lot Number: ${auction.lot_number}`}</p>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">Item Details</h3>
                      <p className="text-gray-600">{`Category: ${auction.item.category}`}</p>
                      <p className="text-gray-600">{`Artist: ${auction.item.artist_name}`}</p>
                      <p className="text-gray-600">{`Description: ${auction.item.description}`}</p>
                      <p className="text-gray-600">{`Estimated Price: $${auction.item.estimated_price}`}</p>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">Current Bidding</h3>
                      <p className="text-gray-600">{`Highest Bid: $${auction.highest_bid}`}</p>
                      {/* Render the list of bids here if needed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[38%] mx-2">
              <div className="my-5">
                <h1 className="w-full text-center text-xl">Previous Bids</h1>
                <div className="border-gray-400 border-2 w-full h-96 my-2 rounded-lg overflow-y-scroll p-3">
                  {parsedBids.length > 0 ? (
                    parsedBids.map((bid, index) => (
                      <div key={index} className="chat chat-start">
                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img
                              className="w-full h-full"
                              src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=826&t=st=1695364724~exp=1695365324~hmac=65336395f6e184e8ed111868a434573af42850c58c14107dbab61b895718941f"
                              alt="User Avatar"
                            />
                          </div>
                        </div>
                        <div className="chat-header">{bid.user}</div>
                        <div className="chat-bubble">${bid.bid_amount}</div>
                        <div className="chat-footer opacity-50">Bid</div>
                      </div>
                    ))
                  ) : (
                    <p>No previous bids</p>
                  )}
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
                      onChange={(e) => setBid(e.target.value)}
                    />
                  </label>
                </div>
                <div className="flex items-end">
                  <button
                    className="h-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 text-center"
                    onClick={handleBid}
                  >
                    BID
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>SOME ERROR</>
      )}
    </>
  );
};

export default Auction;
