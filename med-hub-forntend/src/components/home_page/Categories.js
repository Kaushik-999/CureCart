import React from "react";
import "./Categories.css";

export default function Categories() {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="container-fluid p-2 bd-highlight shadow-sm p-3 mb-5 bg-body rounded">
          <div className="d-flex justify-content-between ps-3 pe-3">
            <h2>Shop By Categories</h2>

            <button
              className="btn btn-primary btn-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              View All
            </button>
          </div>
          <div className="row mt-3 ms-1 me-1">
            <div className="col-sm">
              <div className="card bsc">
                <img
                  className="card-img-top bsc-cit"
                  src="https://www.netmeds.com/images/category/l2/thumb/ayurvedic.jpg?v=1670340140"
                  alt="Card  cap"
                />

                <div className="card-body">
                  <div className="d-flex  justify-content-center card-text">
                    <h6>Ayurveda</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card bsc">
                <img
                  className="card-img-top bsc-cit"
                  src="https://www.netmeds.com/images/category/l2/thumb/health_food_and_drinks.jpg?v=1670340140"
                  alt="Card ap"
                />
                <div className="card-body ">
                  <div className="d-flex  justify-content-center card-text">
                    <h6>Health Food and Drinks</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card bsc">
                <img
                  className="card-img-top bsc-cit"
                  src="https://www.netmeds.com/images/category/l2/thumb/oxygen_can.jpg?v=1670340140"
                  alt="Card cap"
                />
                <div className="card-body ">
                  <div className="d-flex  justify-content-center card-text">
                    <h6>Covid Essentials</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card bsc">
                <img
                  className="card-img-top bsc-cit"
                  src="https://www.netmeds.com/images/category/v1/3108/thumb/bandages_1.jpg"
                  alt="Card  cap"
                />
                <div className="card-body ">
                  <div className="d-flex  justify-content-center card-text">
                    <h6>Home Care and Hygiene</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card bsc">
                <img
                  className="card-img-top bsc-cit"
                  src="https://www.netmeds.com/images/category/v1/3108/thumb/bandages_1.jpg"
                  alt="Card cap"
                />
                <div className="card-body ">
                  <div className="d-flex  justify-content-center card-text">
                    <h6>Grocery & Gourmet</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse " id="collapseExample">
            
              <div className="row mt-3 ms-1 me-1">
                <div className="col-sm">
                  <div className="card bsc">
                    <img
                      className="card-img-top bsc-cit"
                      src="https://www.netmeds.com/images/category/l2/thumb/ayurvedic.jpg?v=1670340140"
                      alt="Card  cap"
                    />

                    <div className="card-body ">
                      <div className="d-flex  justify-content-center card-text">
                        <h6>Eye Care</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card bsc">
                    <img
                      className="card-img-top bsc-cit"
                      src="https://www.netmeds.com/images/category/l2/thumb/health_food_and_drinks.jpg?v=1670340140"
                      alt="Card ap"
                    />
                    <div className="card-body ">
                      <div className="d-flex  justify-content-center card-text">
                        <h6>Health Food and Drinks</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card bsc">
                    <img
                      className="card-img-top bsc-cit"
                      src="https://www.netmeds.com/images/category/l2/thumb/oxygen_can.jpg?v=1670340140"
                      alt="Card cap"
                    />
                    <div className="card-body ">
                      <div className="d-flex  justify-content-center card-text">
                        <h6>Covid Essentials</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card bsc">
                    <img
                      className="card-img-top bsc-cit"
                      src="https://www.netmeds.com/images/category/v1/3108/thumb/bandages_1.jpg"
                      alt="Card  cap"
                    />
                    <div className="card-body ">
                      <div className="d-flex  justify-content-center card-text">
                        <h6>Home Care and Hygiene</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card bsc">
                    <img
                      className="card-img-top bsc-cit"
                      src="https://www.netmeds.com/images/category/v1/3108/thumb/bandages_1.jpg"
                      alt="Card cap"
                    />
                    <div className="card-body ">
                      <div className="d-flex  justify-content-center card-text">
                        <h6>Grocery & Gourmet</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
