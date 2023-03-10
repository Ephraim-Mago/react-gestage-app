import { Navigate, Outlet } from "react-router-dom";
import Toast from "../components/core/Toast";
import Navigation from "../components/Navigation";
import { useStateContext } from "../contexts/ContextProvider";
import useFakeData from "../assets/data";
import { useEffect } from "react";

export default function DefaultLayout() {
  const {
    currentUser,
    userToken,
    appName,
    setStagiaires,
    setFilieres,
    setNiveaux,
    setCurrentUser,
    setUserToken,
  } = useStateContext();
  const { stagiaires, filieres, niveaux } = useFakeData();

  const getData = () => {
    setFilieres(filieres);
    setNiveaux(niveaux);
    setStagiaires(stagiaires);
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  };

  const fullName = () => {
    return `${currentUser.first_name} ${currentUser.last_name}`;
  };

  const logout = (ev) => {
    ev.preventDefault();
    setCurrentUser({});
    setUserToken(null);
    localStorage.removeItem("currentUser");
  };

  if (!userToken) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* Content */}
      <div className="sb-nav-fixed">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          {/* Navbar Brand */}
          <a className="navbar-brand ps-3" href="index.html">
            {appName}
          </a>

          {/* Sidebar Toggle */}
          <button
            className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
            href="#!"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Navbar */}
          <ul className="navbar-nav ms-auto me-md-0 me-0 me-lg-4">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="me-2">{currentUser && fullName()}</span>
                <i className="fas fa-user fa-fw"></i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#!">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Activity Log
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(ev) => logout(ev)}
                  >
                    Se déconnecter
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              className="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <Navigation />
              <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                {currentUser && fullName()}
              </div>
            </nav>
          </div>
          <div id="layoutSidenav_content">
            <main>
              <Outlet />

              <Toast />
            </main>
            <footer className="py-4 bg-light mt-auto">
              <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                  <div className="text-muted">
                    Copyright &copy; {appName} 2023
                  </div>
                  <div>
                    <a href="#">Privacy Policy</a>
                    &middot;
                    <a href="#">Terms &amp; Conditions</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
