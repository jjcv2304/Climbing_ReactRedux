import React from "react";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutesPage from "./routes/RoutesPage";
import ManageCoursePageDefault from "./courses/ManageCoursePage";
import ManageRoutePageDefault from "./routes/ManageRoutePage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePageDefault} />
        <Route path="/course" component={ManageCoursePageDefault} />
        <Route path="/routes" component={RoutesPage} />
        <Route path="/route/:id" component={ManageRoutePageDefault} />
        <Route path="/route" component={ManageRoutePageDefault} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={2000} hideProgressBar />
    </div>
  );
}

export default App;
