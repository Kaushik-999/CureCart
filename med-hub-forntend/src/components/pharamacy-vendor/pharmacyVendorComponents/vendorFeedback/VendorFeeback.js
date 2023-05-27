import React, { useState } from "react";
import SideBar from "../../pharamacyVendorSideBar/SideBar";
import "./VendorFeeback.css";
import axios from "axios";

function VendorFeeback() {
  const [query, setQuery] = useState({
    feedbackType: "",
    describeYourFeedback: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevFeedback) => ({ ...prevFeedback, [name]: value }));
  };

  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (processing) return; // Prevent multiple form submissions
    setProcessing(true);

    // console.log(query);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/pharmacy-vendor/query/",
        query,
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    setProcessing(false);
  };

  return (
    <>
      <SideBar />
      <div className="vendor-feedback-main">
        <div className="vendor-feeback-form-container">
          <form onSubmit={handleSubmit}>
            <h2>Query Form</h2>
            <p>
              We would love to hear your thoughts, suggestions, concerns or
              problems with anything so we can improve!
            </p>
            <div className="vendor-feedback-form-content">
              <div className="vendor-feedback-input-box">
                <label
                  htmlFor="feedbackType"
                  className="vendor-feedback-input-box-label"
                >
                  Feedback Type
                </label>
                <div className="vendor-feedback-type-radio-group">
                  <div className="vendor-feedback-type-radio-group-single">
                    <input
                      type="radio"
                      id="comments"
                      name="feedbackType"
                      value="Comments"
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="comments"
                      className="vendor-feedback-feedbacktype-label"
                    >
                      Comments
                    </label>
                  </div>

                  <div className="vendor-feedback-type-radio-group-single">
                    <input
                      type="radio"
                      id="questions"
                      name="feedbackType"
                      value="Questions"
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="questions"
                      className="vendor-feedback-feedbacktype-label"
                    >
                      Questions
                    </label>
                  </div>
                  <div className="vendor-feedback-type-radio-group-single">
                    <input
                      type="radio"
                      id="deleteMedicine"
                      name="feedbackType"
                      value="deleteMedicine"
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="deleteMedicine"
                      className="vendor-feedback-feedbacktype-label"
                    >
                      Delete Medicine
                    </label>
                  </div>
                </div>
              </div>

              <div className="vendor-feedback-input-box">
                <label
                  htmlFor="describeYourFeedback"
                  className="vendor-feedback-input-box-label"
                >
                  Describe Your Feedback:
                </label>
                <textarea
                  id="describeYourFeedback"
                  name="describeYourFeedback"
                  placeholder="Write your feedback.."
                  className="vendor-feedback-textarea"
                  onChange={handleInputChange}
                  value={query.describeYourFeedback}
                />
              </div>
            </div>
            <div className="vendor-feeback-button-container">
              <button>{processing ? "Processing..." : "Submit"}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default VendorFeeback;
