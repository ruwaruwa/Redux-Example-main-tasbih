import { configureStore } from "@reduxjs/toolkit";
import counter from "../reducer/counter"
// import tasbiix from "../reducer/counter";
//configureStore waxa loo isticmala in lagu abuuro redux store
const store = configureStore({

    reducer : {
        tasbiix : counter
    }
})

export default store