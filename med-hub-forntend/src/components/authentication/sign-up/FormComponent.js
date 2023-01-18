import React from "react";

function FormComponent() {
  return (
    <div>
      <form>
        <p className="ms-2">Fill up credentials </p>
        {/* email input */}
        <div class="form-floating mb-4">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>

        {/* Password Input */}
        <div class="form-floating mb-4">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        {/* Confirm Password Input */}
        <div class="form-floating mb-4">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Confirm Password</label>
        </div>

        <div className="mb-4">
          {/* CheckBox */}
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked
            />
            <label class="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
        </div>
        <div class="d-grid">
          {/* SignIn Button */}
          <button
            class="btn btn-primary btn-lg text-uppercase fw-semibold fs-6"
            type="button"
          >
            Sign Up
          </button>
        </div>
        <div class="divider d-flex align-items-center my-4">
          {/* Divider */}
          <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
        </div>

        <div class="d-grid gap-3">
          {/* SignIn Button */}
          <button
            class="btn btn-outline-secondary btn-lg text-uppercase fw-semibold fs-6"
            type="button"
          >
            <i class="bi bi-google me-2"></i> Continue with Google
          </button>
          <button
            class="btn btn-info btn-lg text-uppercase fw-semibold fs-6"
            type="button"
          >
            <i class="bi bi-facebook me-2"></i> Continue with Facebook
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
