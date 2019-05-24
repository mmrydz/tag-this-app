import React from "react";

function Alert(props) {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      <strong>Success!</strong> You successfully {props.updating ? "updated" : "created"} an item! {props.itemName}{" "}
      <a href="#" className="alert-link">
        {" "}
        View
      </a>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
