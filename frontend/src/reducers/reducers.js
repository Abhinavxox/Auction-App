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
  ALL_BIDS_REQUEST,
  ALL_BIDS_SUCCESS,
  ALL_BIDS_FAIL,
  CLEAR_ERRORS,
} from "../constants/constants.js";

export const UserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const AuctionReducer = (state = { auctions: [] }, action) => {
  switch (action.type) {
    case ALL_AUCTIONS_REQUEST:
      return {
        loading: true,
        auctions: [],
      };
    case ALL_AUCTIONS_SUCCESS:
      return {
        loading: false,
        auctions: action.payload,
      };
    case ALL_AUCTIONS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const AuctionDetailsReducer = (state = { auction: {} }, action) => {
  switch (action.type) {
    case AUCTION_DETAILS_REQUEST:
    case NEW_AUCTION_REQUEST:
      return {
        ...state,
        loading: true,
        isPosted: false,
      };
    case AUCTION_DETAILS_SUCCESS:
    case NEW_AUCTION_SUCCESS:
      return {
        loading: false,
        isPosted: true,
        auction: action.payload,
      };
    case AUCTION_DETAILS_FAIL:
    case NEW_AUCTION_FAIL:
      return {
        ...state,
        errorAuction: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errorAuction: null,
      };
    default:
      return state;
  }
};

export const NewBidReducer = (state = { bid: {} }, action) => {
  switch (action.type) {
    case NEW_BID_REQUEST:
      return {
        ...state,
        loadingBid: true,
      };
    case NEW_BID_SUCCESS:
      return {
        loadingBId: false,
        successBId: action.payload,
      };
    case NEW_AUCTION_FAIL:
      return {
        ...state,
        errorBid: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errorBid: null,
      };
    default:
      return state;
  }
};
