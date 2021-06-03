import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import {
	orderCreateReducer,
	orderDeleteReducer,
	orderDetailsReducer,
	orderMineListReducer,
	orderListReducer,
	orderSummaryReducer,
} from "./reducers/orderReducers";
import {
	productCreateReducer,
	productDetailsReducer,
	productListReducer,
	productUpdateReducer,
	productDeleteReducer,
} from "./reducers/productReducers";

import {
	userDeleteReducer,
	userDetailsReducer,
	userListReducer,
	userRegisterReducer,
	userSigninReducer,
	userUpdateProfileReducer,
	userUpdateReducer,
} from "./reducers/userReducers";

const initialState = {
	userSignin: {
		userInfo: localStorage.getItem("userInfo")
			? JSON.parse(localStorage.getItem("userInfo"))
			: null,
	},
	cart: {
		cartItems: localStorage.getItem("cartItems")
			? JSON.parse(localStorage.getItem("cartItems"))
			: [],
		shippingAddress: localStorage.getItem("shippingAddress")
			? JSON.parse(localStorage.getItem("shippingAddress"))
			: {},
		paymentMethod: "Poste",
	},
};

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,

	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderMineList: orderMineListReducer,
	orderDelete: orderDeleteReducer,
	orderSummary: orderSummaryReducer,

	userSignin: userSigninReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	userUpdate: userUpdateReducer,

	productCreate: productCreateReducer,
	productUpdate: productUpdateReducer,
	productDelete: productDeleteReducer,

	userList: userListReducer,
	userDelete: userDeleteReducer,
	orderList: orderListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
