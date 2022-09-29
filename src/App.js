import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import UserList from "./routes/user-list/user-list.component";

import { setUserList } from "./store/user-list/user-list.action";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const fetchUserData = async (url) => {
    try {
      const response = await fetch(url);
      const userData = await response.json();
      return userData.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const userData = fetchUserData("https://reqres.in/api/users");
    userData.then((resp) => dispatch(setUserList(resp)));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route index element={<UserList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
