import "./App.css";
import { createContext, useState , useReducer} from "react";
import Main from "./component-tree/Main";
import Profile from "./component-tree/Profile";
import Search from "./component-tree/Search";
import Controller from "./components/Controller";
import reducer , {initialState} from "./reducer/reducer";

export const AppStateContext = createContext();

function App() {

  const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <div className="App mt-3">
    <AppStateContext.Provider 
    value={{
        state,
        dispatch
      }}>
    <Controller></Controller>

      <div
        style={{
          height: "80vh",
        }}
        className=" mt-2 container border p-4 shadow-sm"
      >
        <div className="row">
          <div className="col">
            <Profile/>
          </div>
          <div className="col">
            <Main />
          </div>
          <div
            style={{
              overflowY: "scroll",
              maxHeight: "400px",
            }}
            className="col"
          >
            <Search />
          </div>
        </div>
      </div>
    </AppStateContext.Provider>    
    </div>
  );
}

export default App;
