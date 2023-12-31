import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  ALL_AUCTIONS_REQUEST,
  ALL_AUCTIONS_SUCCESS,
  ALL_AUCTIONS_FAIL,
  AUCTION_DETAILS_REQUEST,
  AUCTION_DETAILS_SUCCESS,
  AUCTION_DETAILS_FAIL,
  NEW_AUCTION_REQUEST,
  NEW_AUCTION_SUCCESS,
  NEW_AUCTION_FAIL,
  NEW_BID_REQUEST,
  NEW_BID_SUCCESS,
  AUCTION_END_REQUEST,
  AUCTION_END_SUCCESS,
  AUCTION_END_FAIL,
  CLEAR_ERRORS,
} from "../constants/constants.js";

const BackendUrl = "http://localhost:8000/api";
import axios from "axios";

//login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      `${BackendUrl}/login/`,
      {
        email,
        password,
      },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

//register
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      `${BackendUrl}/register/`,
      {
        name: name,
        email: email,
        password: password,
      },
      config
    );

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

//get all auctions
export const getAuctions = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_AUCTIONS_REQUEST });

    const { data } = await axios.get(`${BackendUrl}/auctions/`);

    dispatch({ type: ALL_AUCTIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_AUCTIONS_FAIL, payload: error.response.data.message });
  }
};

//get auction details
export const getAuctionDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: AUCTION_DETAILS_REQUEST });

    const { data } = await axios.get(`${BackendUrl}/auctions/${id}`);

    dispatch({ type: AUCTION_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: AUCTION_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//new auction
export const newAuction = (auctionData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_AUCTION_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BackendUrl}/auctions/`,
      auctionData,
      config
    );

    dispatch({ type: NEW_AUCTION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: NEW_AUCTION_FAIL, payload: error.response.data.message });
  }
};

//new bid
export const newBid = (bidData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BID_REQUEST });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(`${BackendUrl}/bids/`, bidData, config);

    dispatch({ type: NEW_BID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: NEW_AUCTION_FAIL, payload: error.response.data.message });
  }
};

//get all bids

//clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const endAuction = (id) => async (dispatch) => {
  try {
    dispatch({ type: AUCTION_END_REQUEST });

    const { data } = await axios.put(`${BackendUrl}/auctions/${id}/`, {
      ended: true,
    });

    dispatch({ type: AUCTION_END_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: AUCTION_END_FAIL,
      payload: error.response.data.message,
    });
  }
};
