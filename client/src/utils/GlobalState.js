import { useProductReducer } from "./reducers";
import { createStore } from "redux"
// import { idbPromise } from "./helpers";

const store = createStore(useProductReducer);

export default store;
