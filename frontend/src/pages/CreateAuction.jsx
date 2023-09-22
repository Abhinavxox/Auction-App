import React, { useState } from "react";

const CreateAuction = () => {
  const [category, setCategory] = useState("Painting");
  const [imageSrc, setImageSrc] = useState(
    "https://placehold.co/600x400/EEE/31343C"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result); // Set the image source to the selected image data
      };

      reader.readAsDataURL(file); // Read the selected file as a data URL
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <form className="w-4/5">
        <div className="mb-6">
          {/* title */}
          <label
            for="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Auction Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Auction Title"
            required
          />
        </div>
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2">
          {/* location */}
          <div className="mr-2">
            <label
              for="location"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          {/* date */}
          <div className="ml-2">
            <label
              for="auction_date"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Auction Date
            </label>
            <input
              type="date"
              id="auction_date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2">
          {/* lot number */}
          <div className="mr-2">
            <label
              for="lot_number"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Lot Number
            </label>
            <input
              type="number"
              id="lot_number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          {/* auction period */}
          <div className="ml-2">
            <label
              for="auction_date"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Auction Period
            </label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3">
              <option disabled selected>
                Pick category
              </option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>Midnight</option>
            </select>
          </div>
        </div>
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2">
          <div className="row-span-3 border-2 rounded-lg mb-6 mr-2 flex justify-center overflow-hidden max-w-full max-h-full items-center">
            {/* image view */}
            <img src={imageSrc} alt="Preview" className="h-60"></img>
          </div>

          <div className="ml-2 mb-6">
            {/* item category */}
            <label
              for="category"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Item Category
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option disabled selected>
                Pick category
              </option>
              <option>Painting</option>
              <option>Sculpture</option>
              <option>Photographic Image</option>
              <option>Carving</option>
              <option>Drawing</option>
            </select>
          </div>
          <div className="ml-2 mb-6">
            {/* artist */}
            <label
              for="artist_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Artist Name
            </label>
            <input
              type="artist_name"
              id="artist_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Artist Name"
              required
            />
          </div>
          <div className="ml-2 mb-6">
            {/* estimated price */}
            <label
              for="estimated_price"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Estimated Price
            </label>
            <input
              type="number"
              id="estimated_price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mr-2 mb-6">
            {/* image input */}
            <label
              for="image"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Choose Image
            </label>
            <input
              type="file"
              id="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="bg-gray-600 rounded-lg h-1 my-5"></div>
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2">
          {category === "Painting" ? (
            <>
              <div className="mr-2 mb-6">
                {/* medium */}
                <label
                  for="medium"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Painting Medium
                </label>
                <input
                  type="text"
                  id="medium"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Pencil, Ink, Charcoal or other"
                  required
                />
              </div>
              <div className="ml-2 mb-6">
                {/* framed or not*/}
                <label
                  for="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Framed
                </label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3">
                  <option disabled selected>
                    ...
                  </option>
                  <option>True</option>
                  <option>False</option>
                </select>
              </div>
              <div className="mr-2 mb-6">
                {/* height */}
                <label
                  for="height"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mr-2 mb-6">
                {/* length */}
                <label
                  for="length"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Length (cm)
                </label>
                <input
                  type="number"
                  id="length"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
            </>
          ) : (
            ""
          )}
          {category === "Drawing" ? (
            <>
              <div className="mr-2 mb-6">
                {/* medium */}
                <label
                  for="medium"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Drawing Medium
                </label>
                <input
                  type="text"
                  id="medium"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Oil, Acrylic, Watercolour or other"
                  required
                />
              </div>
              <div className="ml-2 mb-6">
                {/* framed or not*/}
                <label
                  for="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Framed
                </label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3">
                  <option disabled selected>
                    ...
                  </option>
                  <option>True</option>
                  <option>False</option>
                </select>
              </div>
              <div className="mr-2 mb-6">
                {/* height */}
                <label
                  for="height"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mr-2 mb-6">
                {/* length */}
                <label
                  for="length"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Length (cm)
                </label>
                <input
                  type="number"
                  id="length"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
            </>
          ) : (
            ""
          )}
          {category === "Carving" ? (
            <>
              <div className="mr-2 mb-6">
                {/* material */}
                <label
                  for="material"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Material Used
                </label>
                <input
                  type="text"
                  id="medium"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Oak, Beach, Pine, Willow or other"
                  required
                />
              </div>
              <div className="mr-2 mb-6">
                {/* height */}
                <label
                  for="height"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mr-2 mb-6">
                {/* length */}
                <label
                  for="length"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Length (cm)
                </label>
                <input
                  type="number"
                  id="length"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mr-2 mb-6">
                {/* width */}
                <label
                  for="width"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Width (cm)
                </label>
                <input
                  type="number"
                  id="width"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mr-2 mb-6">
                {/* weight */}
                <label
                  for="weight"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
            </>
          ) : (
            ""
          )}
          {category === "Sculpture" ? (
            <>
              <div className="mr-2 mb-6">
                {/* material */}
                <label
                  for="material"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Material Used
                </label>
                <input
                  type="text"
                  id="medium"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Bronze, Marble, Pewter or other"
                  required
                />
              </div>
              <div className="mr-2 mb-6">
                {/* height */}
                <label
                  for="height"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mr-2 mb-6">
                {/* length */}
                <label
                  for="length"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Length (cm)
                </label>
                <input
                  type="number"
                  id="length"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mr-2 mb-6">
                {/* width */}
                <label
                  for="width"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Width (cm)
                </label>
                <input
                  type="number"
                  id="width"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mr-2 mb-6">
                {/* weight */}
                <label
                  for="weight"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
            </>
          ) : (
            ""
          )}
          {category === "Photographic Image" ? (
            <>
              <div className="mr-2 mb-6">
                {/* image type */}
                <label
                  for="type"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Image Type
                </label>
                <input
                  type="text"
                  id="type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Black and White or Colour"
                  required
                />
              </div>
              <div className="mr-2 mb-6">
                {/* height */}
                <label
                  for="height"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mr-2 mb-6">
                {/* length */}
                <label
                  for="length"
                  className="block text-sm mb-2 font-medium text-gray-900"
                >
                  Length (cm)
                </label>
                <input
                  type="number"
                  id="length"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-center mb-6">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAuction;
