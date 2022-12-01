import React from "react";

function HeaderCards({cardHead, cardText}) {
  return (
    <div className="col-xl-3 col-md-6 col-sm-12 mb-2 header-cards">
      <div className="card shadow">
        <div className="card-body">
          <div class="row">

            <div class="col mr-2">
              <div class="fw-bold text-uppercase mb-1 card-head text-primary">
                {cardHead}
                
              </div>
              <div class="h5 mb-0 fw-bold text-gray-800 card-text">
                {cardText}
                </div>
            </div>

            <div class="col-auto">
              <i class="bi bi-calendar icon fa-5x"></i>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCards;
