import React from "react";
import { Link } from "react-router-dom";

const Auctions = () => {
  const data = [
    {
      name: "1962 Ferrari 250 GTO",
      price: "$48.4 million",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/1963_Ferrari_250_GTO_%28chassis_4153GT%29_2.95.jpg",
    },
    {
      name: "Nike Air Jordan 1 'Shattered Backboard'",
      price: "$3,000",
      image:
        "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Shattered-Backboard-3-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606318718",
    },
    {
      name: "Patek Philippe Henry Graves Supercomplication",
      price: "$24 million",
      image:
        "https://images.prismic.io/barnebys/2402a33b-0498-4173-9e2f-3f90be499697_hg2.png.webp?w=1200&h=600&fit=crop&crop=faces&auto=format%2Ccompress&cs=tinysrgb",
    },
    {
      name: "Leonardo da Vinci's 'Salvator Mundi'",
      price: "$450.3 million",
      image:
        "https://www.leonardodavinci.net/images/gallery/salvator-mundi.jpg",
    },
    {
      name: "Antique Violin - Stradivarius",
      price: "$10 million",
      image: "https://ychef.files.bbci.co.uk/976x549/p01d84g5.jpg",
    },
    {
      name: "Antique Coin - 1933 Double Eagle",
      price: "$18.9 million",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Specimen1Obv.jpg/1200px-Specimen1Obv.jpg",
    },
    {
      name: "Antique Book - Gutenberg Bible",
      price: "$5 million",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
    },
    {
      name: "Antique Furniture - Chippendale Chair",
      price: "$100,000",
      image:
        "https://assets.wfcdn.com/im/10447719/resize-h755-w755%5Ecompr-r85/2427/242773375/English+Chippendale+Side+Chair.jpg",
    },
  ];
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
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
          <div class="flex flex-wrap -m-4">
            {data.map((item) => (
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src={item.image}
                  />
                </a>
                <div class="mt-4 relative h-[16vh]">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    {item.name}
                  </h2>
                  <div class="mt-1 flex justify-between absolute bottom-0 w-full">
                    <Link
                      className="border-2 p-3 w-full text-center rounded-xl hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
                      to="/auction/1"
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
    </div>
  );
};

export default Auctions;
