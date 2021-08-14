import "./Container.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { WelcomePage, useStatePage } from "../routesPages/index";
// הערות
// להוסיף ולעדכן עוד ראוטים במידה ויש צורך להוקים נוספים

const Container = () => {
  return (
    <div className="container-body">
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/useState" component={useStatePage} />
        <Route exact path="/useEffect" />
        <Route exact path="/useContext" />
        <Route exact path="/useLayoutEffect" />
        <Route exact path="/useReducer" />
        <Route exact path="/useCallBack" />
        <Route exact path="/useRef" />
      </Switch>
    </div>
  );
};

export default Container;
