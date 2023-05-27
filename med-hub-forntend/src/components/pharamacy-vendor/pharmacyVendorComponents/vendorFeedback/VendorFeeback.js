import React from "react";
import SideBar from "../../pharamacyVendorSideBar/SideBar";
import "./VendorFeeback.css";
function VendorFeeback() {
  return (
    <>
      <SideBar />
      <div className="vendor-feedback-main">
        <div className="vendor-feeback-form-container">
          <form>
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
                    />
                    <label
                      for="comments"
                      className="vendor-feedback-feedbacktype-label"
                    >
                      Comments
                    </label>
                  </div>

                  {/* <div className="vendor-feedback-type-radio-group-single">
                    <input
                      type="radio"
                      id="suggestions"
                      name="feedbackType"
                      value="Suggestions"
                    />
                    <label
                      for="suggestions"
                      className="vendor-feedback-feedbacktype-label"
                    >
                      Suggestions
                    </label>
                  </div> */}
                  <div className="vendor-feedback-type-radio-group-single">
                    <input
                      type="radio"
                      id="questions"
                      name="feedbackType"
                      value="Questions"
                    />
                    <label
                      for="questions"
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
                    />
                    <label
                      for="deleteMedicine"
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
                />
              </div>
            </div>
            <div className="vendor-feeback-button-container">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default VendorFeeback;
