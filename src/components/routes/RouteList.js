import React from "react";
import PropTypes from "prop-types";

const RouteList = ({ routes, onDeleteClick, onUpdateClick, onAddClick }) => {
  function GetRouteTableClassColor(route) {
    if (route.grade === undefined || route.grade.name === undefined) {
      route.grade = { name: "NA" };
      route.type = { name: "NA" };
      route.location = { name: "NA" };
      return "";
    }

    const gradeFirstLetter = Number(route.grade.name.substr(0, 1));
    const gradeSecondLetter = route.grade.name.substr(1, 1);

    if (route.type.name === "Traditional") {
      return "table-danger";
    }
    if (route.type.name === "Top rope") {
      return "table-secondary";
    }
    if (gradeFirstLetter < 6) {
      return "table-success";
    } else if (gradeFirstLetter === 6 && gradeSecondLetter === "a") {
      return "table-primary";
    } else {
      return "table-warning";
    }
  }

  return (
    <>
      <table className="table table-sm">
        <thead className="table-dark">
          <tr>
            <th>
              Name <i className="fa fa-fw fa-sort"></i>
            </th>
            <th>Bolts</th>
            <th>
              Grade <i className="fa fa-fw fa-sort"></i>
            </th>
            <th>Meters</th>
            <th>
              Type<i className="fa fa-fw fa-sort"></i>
            </th>
            <th>
              Location<i className="fa fa-fw fa-sort"></i>
            </th>
            <th colSpan={2} style={{ textAlign: "center" }}>
              <button
                className="btn btn-outline-light add-route btn-sm"
                onClick={() => onAddClick()}
              >
                Add Route
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {routes.map((route) => {
            return (
              <tr key={route.id} className={GetRouteTableClassColor(route)}>
                <td>{route.name}</td>
                <td>{route.bolts}</td>
                <td>{route.grade.name}</td>
                <td>{route.meters}</td>
                <td>{route.type.name}</td>
                <td>{route.location.name}</td>
                <td>
                  <button
                    className="btn btn-outline-info"
                    onClick={() => onUpdateClick(route)}
                  >
                    <i className="fa fa-edit" aria-hidden="true"></i>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDeleteClick(route)}
                  >
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

RouteList.propTypes = {
  routes: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onUpdateClick: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
};

export default RouteList;
