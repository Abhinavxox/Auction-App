import React from "react";

const Auction = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div class="md:w-3/5 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <img
            src="https://placehold.co/600x400/EEE/31343C"
            className="w-full"
          />
          <div tabIndex={0} className="collapse ">
            <div className="collapse-title text-xl font-medium">
              Click here for Details
            </div>
            <div className="collapse-content">
              <p>
                tabIndex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
        </div>
        <div className="w-[38%] mx-2">
          <div className="my-5">
            <h1 className="w-full text-center text-xl">Previous Bids</h1>
            <div className="border-gray-400 border-2 w-full h-96 my-2 rounded-lg overflow-y-scroll">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      className="w-full h-full"
                      src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=826&t=st=1695364724~exp=1695365324~hmac=65336395f6e184e8ed111868a434573af42850c58c14107dbab61b895718941f"
                    />
                  </div>
                </div>
                <div className="chat-header">Obi-Wan Kenobi</div>
                <div className="chat-bubble">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Bid</div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      className="w-full h-full"
                      src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=826&t=st=1695364724~exp=1695365324~hmac=65336395f6e184e8ed111868a434573af42850c58c14107dbab61b895718941f"
                    />
                  </div>
                </div>
                <div className="chat-header">Obi-Wan Kenobi</div>
                <div className="chat-bubble">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Bid</div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      className="w-full h-full"
                      src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=826&t=st=1695364724~exp=1695365324~hmac=65336395f6e184e8ed111868a434573af42850c58c14107dbab61b895718941f"
                    />
                  </div>
                </div>
                <div className="chat-header">Obi-Wan Kenobi</div>
                <div className="chat-bubble">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Bid</div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      className="w-full h-full"
                      src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=826&t=st=1695364724~exp=1695365324~hmac=65336395f6e184e8ed111868a434573af42850c58c14107dbab61b895718941f"
                    />
                  </div>
                </div>
                <div className="chat-header">Obi-Wan Kenobi</div>
                <div className="chat-bubble">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Bid</div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      className="w-full h-full"
                      src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=826&t=st=1695364724~exp=1695365324~hmac=65336395f6e184e8ed111868a434573af42850c58c14107dbab61b895718941f"
                    />
                  </div>
                </div>
                <div className="chat-header">Obi-Wan Kenobi</div>
                <div className="chat-bubble">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Bid</div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      className="w-full h-full"
                      src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=826&t=st=1695364724~exp=1695365324~hmac=65336395f6e184e8ed111868a434573af42850c58c14107dbab61b895718941f"
                    />
                  </div>
                </div>
                <div className="chat-header">Obi-Wan Kenobi</div>
                <div className="chat-bubble">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Bid</div>
              </div>
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
  );
};

export default Auction;
