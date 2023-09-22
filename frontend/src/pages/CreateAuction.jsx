import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newAuction } from "../actions/actions";
import { useNavigate } from "react-router-dom";

const CreateAuction = () => {
  const navigate = useNavigate();
  const { user, loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );
  const { isPosted, auction, errorAuction } = useSelector(
    (state) => state.auctionDetails
  );
  const [category, setCategory] = useState("Painting");
  const [imageSrc, setImageSrc] = useState(
    "https://placehold.co/600x400/EEE/31343C"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);
        setFormData({
          ...formData,
          item: { ...formData.item, image: e.target.result },
        });
      };

      reader.readAsDataURL(file); // Read the selected file as a data URL
    }
  };

  //usestate to handle the form data
  const [categoryData, setCategoryData] = useState({});
  const [formData, setFormData] = useState({
    user_id: user.id,
    title: "",
    location: "",
    auction_date: "",
    auction_period: "",
    lot_number: "",
    item: {
      item_id: Math.floor(Math.random() * 100000),
      category: "",
      artist_name: "",
      subject_classification: "",
      description: "",
      estimated_price: "00.00",
      category_data: categoryData,
    },
    highest_bid: "00.00",
    bids: [],
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(newAuction(formData));
  };

  useEffect(() => {
    if (isPosted) {
      console.log("Auction posted");
      navigate(`/`);
    }
  }, [isPosted]);

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
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
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
              onChange={(e) => {
                setFormData({ ...formData, location: e.target.value });
              }}
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
              onChange={(e) => {
                setFormData({ ...formData, auction_date: e.target.value });
              }}
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
              onChange={(e) => {
                setFormData({ ...formData, lot_number: e.target.value });
              }}
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
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              onChange={(e) => {
                setFormData({ ...formData, auction_period: e.target.value });
              }}
            >
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
              onChange={(e) => {
                setCategory(e.target.value);
                setFormData({
                  ...formData,
                  item: { ...formData.item, category: e.target.value },
                });
                if (e.target.value === "Painting") {
                  setCategoryData({
                    medium: "",
                    framed: "",
                    height: "",
                    length: "",
                  });
                }
                if (e.target.value === "Drawing") {
                  setCategoryData({
                    medium: "",
                    framed: "",
                    height: "",
                    length: "",
                  });
                }
                if (e.target.value === "Carving") {
                  setCategoryData({
                    material: "",
                    height: "",
                    length: "",
                    width: "",
                    weight: "",
                  });
                }
                if (e.target.value === "Sculpture") {
                  setCategoryData({
                    material: "",
                    height: "",
                    length: "",
                    width: "",
                    weight: "",
                  });
                }
                if (e.target.value === "Photographic Image") {
                  setCategoryData({
                    type: "",
                    height: "",
                    length: "",
                  });
                }
              }}
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
              onChange={(e) => {
                setFormData({
                  ...formData,
                  item: { ...formData.item, artist_name: e.target.value },
                });
              }}
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
              onChange={(e) => {
                setFormData({
                  ...formData,
                  item: {
                    ...formData.item,
                    estimated_price: parseFloat(e.target.value).toFixed(2),
                  },
                });
              }}
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
          <div className="ml-2 mb-6 row-span-2">
            {/* description*/}
            <label
              for="estimated_price"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="6"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 w-full p-2.5"
              required
              onChange={(e) => {
                setFormData({
                  ...formData,
                  item: { ...formData.item, description: e.target.value },
                });
              }}
            ></textarea>
          </div>
          <div className="mr-2 mb-6">
            {/* classification */}
            <label
              for="category"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Classification
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  item: {
                    ...formData.item,
                    subject_classification: e.target.value,
                  },
                });
              }}
            >
              <option disabled selected>
                Pick classification
              </option>
              <option>landscape</option>
              <option>seascape</option>
              <option>portrait</option>
              <option>figure</option>
              <option>still life</option>
              <option>nude</option>
              <option>animal</option>
              <option>abstract</option>
              <option>other</option>
            </select>
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      medium: e.target.value,
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      framed: e.target.value,
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
                >
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      height: parseFloat(e.target.value).toFixed(2),
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      length: parseFloat(e.target.value).toFixed(2),
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      medium: e.target.value,
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      framed: e.target.value,
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
                >
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      height: parseFloat(e.target.value).toFixed(2),
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      length: parseFloat(e.target.value).toFixed(2),
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      material: e.target.value,
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      height: parseFloat(e.target.value).toFixed(2),
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      length: parseFloat(e.target.value).toFixed(2),
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      width: parseFloat(e.target.value).toFixed(2),
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      weight: parseFloat(e.target.value).toFixed(2),
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      material: e.target.value,
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      height: parseFloat(e.target.value).toFixed(2),
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      length: parseFloat(e.target.value).toFixed(2),
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      width: parseFloat(e.target.value).toFixed(2),
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      weight: parseFloat(e.target.value).toFixed(2),
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      type: e.target.value,
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      height: parseFloat(e.target.value).toFixed(2),
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
                  onChange={(e) => {
                    setCategoryData({
                      ...categoryData,
                      length: parseFloat(e.target.value).toFixed(2),
                    });
                    setFormData({
                      ...formData,
                      item: {
                        ...formData.item,
                        category_data: categoryData,
                      },
                    });
                  }}
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAuction;
