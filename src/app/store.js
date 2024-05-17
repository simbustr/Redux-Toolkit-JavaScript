import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slices/UserSlices";
import LoaderReducer from "../slices/loaderSlice";
import ToasterReducer from "../slices/toasterSlice";
import ThemeReducer from "../slices/themeSlice";
import TodoReducer from "../slices/todoSlice";
import ProductReducer from "../slices/productSlice"

export const store = configureStore({
  reducer: {
    usersInfo: UserReducer,
    loaderInfo: LoaderReducer,
    toasterInfo: ToasterReducer,
    themeInfo:ThemeReducer,
    todoInfo:TodoReducer,
    productInfo:ProductReducer,
  },
});
