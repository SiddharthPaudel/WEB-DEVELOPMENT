import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../img/back2.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  mobNo: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
};

const Signup = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [succMsg, setSuccMsg] = useState("");
  const navigate = useNavigate();

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values, action) => {
        console.log(values);
        // Simulating registration process
        setTimeout(() => {
          setSuccMsg("Registered successfully!");
          navigate("/signup");
        }, 2000);
      },
    });

  const notify = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div
      className="container-fluid p-0 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${back})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="col-md-4">
        <div className="card shadow-lg rounded">
          <div className="card-header bg-primary text-white text-center py-3">
            <h4>Signup</h4>
          </div>
          <div className="card-body p-4">
            {errorMsg && (
              <div className="alert alert-danger mb-4" role="alert">
                {errorMsg}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control rounded-pill"
                  placeholder="Full Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <div className="text-danger">{errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-pill"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control rounded-pill"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  name="mobNo"
                  className="form-control rounded-pill"
                  placeholder="Mobile Number"
                  value={values.mobNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.mobNo && touched.mobNo && (
                  <div className="text-danger">{errors.mobNo}</div>
                )}
              </div>
              <div className="mb-3">
                <textarea
                  rows="3"
                  name="address"
                  className="form-control rounded-pill"
                  placeholder="Address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.address && touched.address && (
                  <div className="text-danger">{errors.address}</div>
                )}
              </div>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    name="city"
                    className="form-control rounded-pill"
                    placeholder="City"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.city && touched.city && (
                    <div className="text-danger">{errors.city}</div>
                  )}
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="state"
                    className="form-control rounded-pill"
                    placeholder="State"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.state && touched.state && (
                    <div className="text-danger">{errors.state}</div>
                  )}
                </div>
                <div className="col">
                  <input
                    type="number"
                    name="pincode"
                    className="form-control rounded-pill"
                    placeholder="Pincode"
                    value={values.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.pincode && touched.pincode && (
                    <div className="text-danger">{errors.pincode}</div>
                  )}
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-100 rounded-pill">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export { Signup };
