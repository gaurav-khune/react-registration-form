import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    return newErrors;
  };

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert(
      `Form Data Submitted!\nUsername: ${formData.username}\nEmail: ${formData.email}\nPassword: ${formData.password}`,
    );
  }

  return (
    <div
      className="container-fluid"
      style={{
        maxWidth: "80vw",
        margin: "10vh auto",
        padding: "1rem",
        borderRadius: "1rem",
        border: "1px solid lightgray",
        boxShadow: "0px 2px 8px 1px rgba(0, 0, 0, 0.2)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            value={formData.username}
            name="username"
            autoComplete="off"
            onChange={(event) => {
              setFormData((prev) => ({
                ...prev,
                username: event.target.value,
              }));
            }}
          />
          {errors.username && (
            <div style={{ color: "red" }}>{errors.username}</div>
          )}
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.email}
            autoComplete="off"
            name="email"
            onChange={(event) => {
              setFormData((prev) => ({ ...prev, email: event.target.value }));
            }}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          <div id="emailHelp" className="form-text">
            We’ll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={formData.password}
            name="password"
            autoComplete="off"
            onChange={(event) => {
              setFormData((prev) => ({
                ...prev,
                password: event.target.value,
              }));
            }}
          />
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
        </div>
        <div className="mb-3 form-field">
          <input type="checkbox" id="exampleCheck1" className="check" />
          <label for="exampleCheck1">Check me out</label>
        </div>
        <button
          type="submit"
          className="btn-solid theme-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;

// we will see the part of routing ex: method and action handling in form
