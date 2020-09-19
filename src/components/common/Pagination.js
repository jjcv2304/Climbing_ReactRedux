// import React from "react";
// import PropTypes from "prop-types";
//
// const Pagination = ({ name, label, onChange, value }) => {
//   let wrapperClass = "form-group";
//   if (error && error.length > 0) {
//     wrapperClass += " " + "has-error";
//   }
//
//   return (
//     <div className={wrapperClass}>
//       <label htmlFor={name}>{label}</label>
//       <div className="field">
//         <input
//           type="text"
//           name={name}
//           className="form-control"
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//         />
//         {error && <div className="alert alert-danger">{error}</div>}
//       </div>
//     </div>
//   );
// };
//
// TextInput.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   error: PropTypes.string,
// };
//
// export default TextInput;

// <nav aria-label="Page navigation example">
//     <ul className="pagination justify-content-center">
//         <li className="page-item">
//             <a className="page-link" href="#" aria-label="Previous">
//                 <span aria-hidden="true">&laquo;</span>
//                 <span className="sr-only">First</span>
//             </a>
//         </li>
//         <li className="page-item">
//             <a className="page-link" href="#" aria-label="Previous">
//                 <span aria-hidden="true">&lsaquo;</span>
//                 <span className="sr-only">Previous</span>
//             </a>
//         </li>
//         <li className="page-item">
//             <a className="page-link" href="#">
//                 1
//             </a>
//         </li>
//         <li className="page-item">
//             <a className="page-link" href="#">
//                 2
//             </a>
//         </li>
//         <li className="page-item">
//             <a className="page-link" href="#">
//                 3
//             </a>
//         </li>
//         <li className="page-item">
//             <a className="page-link" href="#" aria-label="Next">
//                 <span aria-hidden="true">&rsaquo;</span>
//                 <span className="sr-only">Next</span>
//             </a>
//         </li>
//         <li className="page-item">
//             <a className="page-link" href="#" aria-label="Next">
//                 <span aria-hidden="true">&raquo;</span>
//                 <span className="sr-only">Last</span>
//             </a>
//         </li>
//     </ul>
// </nav>
