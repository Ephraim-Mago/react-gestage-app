import { useState } from "react";
import { Link } from "react-router-dom";
import useFakeData from "../assets/data";
import { useStateContext } from "../contexts/ContextProvider";
import { v4 as uuidv4 } from "uuid";

export default function Login() {
  const { setCurrentUser, setUserToken, showToast } =
    useStateContext();
  const { users } = useFakeData();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({ __html: "" });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    const check = users.find(
      (user) => user.email.toLowerCase() == data.email.toLowerCase()
    );
    if (!check) {
      setError({ __html: "Addresse e-mail ou compte inexistant" });
    } else if (check.password.toLowerCase() != data.password.toLowerCase()) {
      setError({ __html: "Mot de passe incorrecte" });
    } else if (!check.active) {
      setError({ __html: "Votre compte est momentanément désactiver" });
    } else {
      let token = uuidv4();
      const tmp = {
        id: check.id,
        first_name: check.first_name,
        last_name: check.last_name,
        email: check.email,
        role: check.role,
        active: check.active,
      };

      setCurrentUser(tmp);
      localStorage.setItem("currentUser", JSON.stringify(tmp));
      setUserToken(token);
      showToast("Connexion réussi");
    }
  };

  return (
    <div className="col-lg-5">
      <div className="card shadow-lg border-0 rounded-lg mt-5">
        <div className="card-header">
          <h3 className="text-center font-weight-light my-4">Login</h3>
        </div>
        <div className="card-body">
          {error.__html && (
            <div
              className="alert alert-danger"
              role="alert"
              dangerouslySetInnerHTML={error}
            ></div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="inputEmail"
                type="email"
                name="email"
                value={data.email}
                onChange={(ev) => handleChange(ev)}
                placeholder="name@example.com"
              />
              <label htmlFor="inputEmail">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="inputPassword"
                type="password"
                name="password"
                value={data.password}
                onChange={(ev) => handleChange(ev)}
                placeholder="Password"
              />
              <label htmlFor="inputPassword">Password</label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                id="inputRememberPassword"
                type="checkbox"
                value=""
              />
              <label
                className="form-check-label"
                htmlFor="inputRememberPassword"
              >
                Remember Password
              </label>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
              <Link to="/reset-password" className="small">
                Forgot Password?
              </Link>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="card-footer text-center py-3">
          <div className="small">
            <Link to="/register">Need an account? Sign up!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
