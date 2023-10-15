import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import transferSlice from "./transferSlice";

export default configureStore({
  reducer: {
    menu: menuSlice,
    transfer: transferSlice,
  },
});
