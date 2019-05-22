import React from "react";

function Alert() {
    return (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> You successfully created an item! <a href="#" className="alert-link"> View</a>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default Alert;