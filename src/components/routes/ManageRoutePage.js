import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadRoutes, saveRoute } from "../../redux/actions/routeActions";
import PropTypes from "prop-types";
import RouteForm from "./RouteForm";
import { newRoute } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { loadLocations } from "../../redux/actions/locationActions";
import { loadTypes } from "../../redux/actions/typeActions";
import { loadGrades } from "../../redux/actions/gradeActions";

export function ManageRoutePage({
  routes,
  locations,
  grades,
  routeTypes,
  loadRoutes,
  loadLocations,
  loadTypes,
  loadGrades,
  saveRoute,
  history,
  ...props
}) {
  const [route, setRoute] = useState({ ...props.route });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (routes.length === 0) {
      loadRoutes().catch((error) => {
        alert("Loading routes failed" + error);
      });
    } else {
      setRoute({ ...props.route });
    }

    if (locations.length === 0) {
      loadLocations().catch((error) => {
        alert("Loading locations failed" + error);
      });
    }
    if (grades.length === 0) {
      loadGrades().catch((error) => {
        alert("Loading grades failed" + error);
      });
    }
    if (routeTypes.length === 0) {
      loadTypes().catch((error) => {
        alert("Loading types failed" + error);
      });
    }
  }, [props.route]);

  function handleChange(event) {
    const { name, value } = event.target;
    let newValue = value;
    if (name === "type") {
      newValue =
        routeTypes.find((routeType) => routeType.id === +value) || null;
    }
    if (name === "grade") {
      newValue = grades.find((grade) => grade.id === +value) || null;
    }
    if (name === "location") {
      newValue = locations.find((location) => location.id === +value) || null;
    }
    setRoute((prevRoute) => ({
      ...prevRoute,
      [name]: newValue,
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

  return routes.length === 0 ||
    locations.length === 0 ||
    grades.length === 0 ||
    routeTypes.length === 0 ? (
    <Spinner />
  ) : (
    <RouteForm
      route={route}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
      grades={grades}
      locations={locations}
      routeTypes={routeTypes}
    />
  );
}

ManageRoutePage.propTypes = {
  route: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  grades: PropTypes.array.isRequired,
  routeTypes: PropTypes.array.isRequired,
  loadRoutes: PropTypes.func.isRequired,
  loadLocations: PropTypes.func.isRequired,
  loadTypes: PropTypes.func.isRequired,
  loadGrades: PropTypes.func.isRequired,
  saveRoute: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getRouteById(routes, id) {
  return routes.find((route) => route.id === +id) || null;
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const route =
    id && state.routes.length > 0 ? getRouteById(state.routes, id) : newRoute;
  return {
    route,
    routes: state.routes,
    locations: state.locations,
    routeTypes: state.routeTypes,
    grades: state.grades,
  };
}

const mapDispatchToProps = {
  loadRoutes,
  loadLocations,
  loadTypes,
  loadGrades,
  saveRoute,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRoutePage);
