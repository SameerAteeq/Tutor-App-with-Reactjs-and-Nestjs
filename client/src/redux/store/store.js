import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UserApi } from "../services/userApi";
import userReducer from "../slices/user-slice/userSlice";
import { studentPostApi } from "../services/StudentPostApi";
import { proposalApi } from "../services/ProposalApi";

const rootReducer = combineReducers({
  user: userReducer,

  [UserApi.reducerPath]: UserApi.reducer,
  [studentPostApi.reducerPath]: studentPostApi.reducer,
  [proposalApi.reducerPath]: proposalApi.reducer,
});
const middleware = [
  ...getDefaultMiddleware(),
  UserApi.middleware,
  studentPostApi.middleware,
  proposalApi.middleware,
];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(UserApi.middleware),
});

setupListeners(store.dispatch);
