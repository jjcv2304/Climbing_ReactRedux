import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadRoutes, saveRoute } from "../../redux/actions/routeActions";
import PropTypes from "prop-types";
import RouteForm from "./RouteForm";
import { newRoute } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManageRoutePage({
  routes,
  loadRoutes,
  saveRoute,
  history,
  ...props
}) {
  debugger;
  const [route, setRoute] = useState({ ...props.route });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    debugger;
    if (routes.length === 0) {
      loadRoutes().catch((error) => {
        alert("Loading routes failed" + error);
      });
    } else {
      setRoute({ ...props.route });
    }

    // if (authors.length === 0) {
    //   loadAuthors().catch((error) => {
    //     alert("Loading authors failed" + error);
    //   });
    // }
  }, [props.route]);

  function handleChange(event) {
    const { name, value } = event.target;
    setRoute((prevRoute) => ({
      ...prevRoute,
      [name]: value,
    }));
  }

  function formIsValid() {
    // const { title, authorId, category } = route;
    const errors = {};

    // if (!title) errors.title = "Title is required.";
    // if (!authorId) errors.author = "Author is required";
    // if (!category) errors.category = "Category is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveRoute(route)
      .then(() => {
        toast.success("Route saved.");
        history.push("/routes");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return routes.length === 0 ? (
    <Spinner />
  ) : (
    <RouteForm
      route={route}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageRoutePage.propTypes = {
  route: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  loadRoutes: PropTypes.func.isRequired,
  saveRoute: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getRouteById(routes, id) {
  let route = routes.find((route) => route.id === +id) || null;
  console.dir(route);
  debugger;
  return route;
}

function mapStateToProps(state, ownProps) {
  debugger;
  const id = ownProps.match.params.id;
  const route =
    id && state.routes.length > 0 ? getRouteById(state.routes, id) : newRoute;
  debugger;
  return {
    route,
    routes: state.routes,
  };
}

const mapDispatchToProps = {
  loadRoutes,
  saveRoute,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRoutePage);
