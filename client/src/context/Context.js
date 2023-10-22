import {createContext, useEffect, useReducer} from 'react';
import Reducer from './Reducer'; // this is reducer created by us.

// this is our initial state.Before login user is null.isFetching =false.It will decide the beginning and ending of 
// the process so its gonna be false first.Bcz we are not fetching anything in the beginning.
// also error =false at the beginning.
const INITITAL_STATE={
    // user:null,
     user:JSON.parse(localStorage.getItem("user"))||null, // if i keep it null then on refresh user will become null always so must take user from localstorage.
    isFetching:false,
    error:false
}
// Now i can create my context.

export const Context=createContext(INITITAL_STATE);

// Now I want my context to be availaible everywhere.For this we create this wrapper and basically want App.js to 
// be inside of it so that every page is accessible by the Context.
// Now go to index.js and put App inside it.Go and see what is done there.
export const ContextProvider=({children})=>{ // this is nothing but props.children.

    const[state,dispatch]=useReducer(Reducer,INITITAL_STATE);

    useEffect(()=>
    {
      localStorage.setItem("user",JSON.stringify(state.user)) //key,string.Remember string must be a json file.so cant use directly state.user.
    },[state.user])

    return <Context.Provider value={{user:state.user,isFetching:state.isFetching,error:state.error,dispatch:dispatch}}>
       {/* // this is nothing but props.children */}
       {children} 
    </Context.Provider>
}

// Now understand how it will work on login button submit.
// User will enter his/her credentials.After clicking button we will go to dispatch action.
// Then this action will go to reducer and reducer will decide which properties to change in our initial state.
// then it will come to Context and update whole App.js as per new state.