import React from "react";
import { Route } from "react-router-dom";
import Journal from "./components/JournalContainer";
import Logout from "./components/Logout";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import Profile from "./components/Profile/profile";
const Dashboard = () => {
  return (
    <>
      <div id="dashboard" className="wrapper flex-row">
        <SideBar />
        <div className="dashboard mt-4 wrapper flex-column">
          <Logout />
          <Route exact path="/dashboard" component={Journal} />
          <Route path="/dashboard/food-search" component={SearchBar} />
          <Route path="/dashboard/profile" component={Profile} />
        </div>
      </div>
      <div className="wave"></div>
    </>
  );
};

export default Dashboard;
