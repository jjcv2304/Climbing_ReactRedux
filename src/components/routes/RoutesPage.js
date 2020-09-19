import React from "react";
import { connect } from "react-redux";
import * as routeActions from "../../redux/actions/routeActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import RouteList from "./RouteList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class RoutesPage extends React.Component {
  state = {
    redirectToAddRoutePage: false,
  };

  componentDidMount() {
    const { routes, actions } = this.props;

    if (routes.length === 0) {
      actions.loadRoutes().catch((error) => {
        alert("Loading routes failed" + error);
      });
    }

    // if (authors.length === 0) {
    //   actions.loadAuthors().catch((error) => {
    //     alert("Loading authors failed" + error);
    //   });
    // }
  }

  handleDeleteRoute = async (route) => {
    toast.success("Route deleted");
    try {
      await this.props.actions.deleteRoute(route);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  handleUpdateRoute = async (route) => {
    this.props.history.push("/route/" + route.id);
  };

  handleAddRoute = async () => {
    this.setState({ redirectToAddRoutePage: true });
    this.props.history.push("/route/");
  };

  render() {
    return (
      <>
        {this.state.redirectToAddRoutePage && <Redirect to="/route" />}
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <div className="d-flex justify-content-between">
              <h4>Routes</h4>
            </div>
            <RouteList
              onDeleteClick={this.handleDeleteRoute}
              onUpdateClick={this.handleUpdateRoute}
              onAddClick={this.handleAddRoute}
              routes={this.props.routes}
            />
          </>
        )}
      </>
    );
  }
}

RoutesPage.propTypes = {
  // routesType: PropTypes.array.isRequired,
  // grades: PropTypes.array.isRequired,
  // locations: PropTypes.array.isRequired,
  routes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    routes: state.routes,
    // routes:
    //   state.authors.length === 0
    //     ? []
    //     : state.routes.map((route) => {
    //         return {
    //           ...route,
    //           location: state.locations.find((a) => a.id === route.location.id)
    //             .name,
    //         };
    //       }),
    // locations: state.locations,
    // grades: state.grades,
    // routesType: state.routesType,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadRoutes: bindActionCreators(routeActions.loadRoutes, dispatch),
      // loadLocations: bindActionCreators(locat.loadAuthors, dispatch),
      deleteRoute: bindActionCreators(routeActions.deleteRoute, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesPage);
