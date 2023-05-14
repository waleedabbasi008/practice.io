//Context creation   ✅
//provider
//comsumer
//instead of using consumer we use UseContext hook
import React, { useReducer } from "react";
import { useContext } from "react";
import Reducer from "./Reducer";
import { useEffect } from "react";
let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
   isLoading: true,
   query: "HTML",
   nbpages: 0,
   page: 0,
   hits: [],
}
const AppContext = React.createContext();

// To create a provider function
const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(Reducer, initialState)
   const fecthApiData = async (url) => {
      dispatch({ type: "SET_LOADING" });

      try {
         const res = await fetch(url);
         const data = await res.json();
         console.log(data);
         dispatch({
            type: "GET_STORIES",
            payload: {
               hits: data.hits,
               nbPages: data.nbPages,
            },
         });
         // isLoading = false;
      } catch (error) {
         console.log(error);
      }
   };

   // to remove the post
   const removePost = (post_ID) => {
      dispatch({ type: "REMOVE_POST", payload: post_ID });
   };

   // plz subscribe thapa technical youtube channel

   // search
   const searchPost = (searchQuery) => {
      dispatch({
         type: "SEARCH_QUERY",
         payload: searchQuery,
      });
   };

   // pagination
   const getNextPage = () => {
      dispatch({
         type: "NEXT_PAGE",
      });
   };

   const getPrevPage = () => {
      dispatch({
         type: "PREV_PAGE",
      });
   };

   // to call teh api func
   useEffect(() => {
      fecthApiData(`${API}query=${state.query}&page=${state.page}`);
   }, [state.query, state.page]);
   return <AppContext.Provider value={{ ...state }} > {children} </AppContext.Provider>  //Value contains the whole data that you are goin gto be use
};


// creating the custom hook
const useGlobalContext = () => {
   return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };
