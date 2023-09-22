import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

//for redux devtools
import { composeWithDevTools } from "redux-devtools-extension";

import {
  UserReducer,
  AuctionDetailsReducer,
  AuctionReducer,
  NewBidReducer,
} from "./reducers/reducers";

//multiple reducers
const reducer = combineReducers({
  user: UserReducer,
  auctions: AuctionReducer,
  auctionDetails: AuctionDetailsReducer,
  bid: NewBidReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
