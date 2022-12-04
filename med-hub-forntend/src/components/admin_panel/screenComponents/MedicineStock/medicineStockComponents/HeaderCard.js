import React from "react";

function HeaderCard({cardHead, cardText}) {
  return (
    <div className="col-xl-3 col-md-6 col-sm-12 mb-2 header-cards">
      <div className="card shadow">
        <div className="card-body">
          <div className="row">
            <div className="col mr-2">
              <div className="fw-bold text-uppercase mb-1 card-head text-primary">
                {cardHead}
              </div>
              <div className="h5 mb-0 fw-bold text-gray-800 card-text">
                {cardText}
              </div>
            </div>

            <div className="col-auto">
              <i className="bi bi-calendar icon fa-5x"></i>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
