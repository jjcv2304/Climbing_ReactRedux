import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RouteList = ({ routes, onDeleteClick }) => (
//     GetRouteTableClassColor(route: Route) {
//   const gradeFirstLetter = Number(route.grade.name.substr(0, 1));
//   const gradeSecondLetter = route.grade.name.substr(1, 1);
//
//   if (route.type.name === 'Traditional') {
//     return 'table-danger';
//   }
//   if (route.type.name === 'Top rope') {
//     return 'table-secondary';
//   }
//   if (gradeFirstLetter < 6) {
//     return 'table-success';
//   } else if (gradeFirstLetter === 6 && gradeSecondLetter === 'a') {
//     return 'table-primary';
//   } else {
//     return 'table-warning';
//   }
//
// };
  <>
    <table className="table">
      <thead>
        <tr>
          <th />
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
          <th />
        </tr>
      </thead>
      <tbody>
        {routes.slice(5, 10).map((route) => {
          return (
            <tr key={route.id}>
              <td></td>
              <td>
                <Link to={"/route/" + route.id}>{route.name}</Link>
              </td>
              <td>{route.bolts}</td>
              <td>{route.grade.name}</td>
              <td>{route.meters}</td>
              <td>{route.type.name}</td>
              <td>{route.location.name}</td>
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
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">First</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&lsaquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&rsaquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Last</span>
          </a>
        </li>
      </ul>
    </nav>
  </>
);

RouteList.propTypes = {
  routes: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default RouteList;
