import "./SideBar.css";
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar-body">
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/useState">useState </Link>
        </li>
        <li>
          <Link to="/useEffect">useEffect </Link>
        </li>
        <li>
          <Link to="/useContext">useContext </Link>
        </li>
        <li>
          <Link to="/useLayoutEffect">useLayoutEffect </Link>
        </li>
        <li>
          <Link to="/useReducer">useReducer </Link>
        </li>
        <li>
          <Link to="/useCallBack">useCallBack </Link>
        </li>
        <li>
          <Link to="/useRef">useRef </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
