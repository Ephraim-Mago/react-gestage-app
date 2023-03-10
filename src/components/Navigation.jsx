import { NavLink } from "react-router-dom";

export default function Navigation() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="sb-sidenav-menu">
      <div className="nav">
        <div className="sb-sidenav-menu-heading">Core</div>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            classNames(isActive ? "active" : "", "nav-link")
          }
        >
          <div className="sb-nav-link-icon">
            <i className="fas fa-tachometer-alt"></i>
          </div>
          Dashboard
        </NavLink>
        <div className="sb-sidenav-menu-heading">Scolarité</div>
        <NavLink
          to="/stagiaires"
          className={({ isActive }) =>
            classNames(isActive ? "active" : "", "nav-link")
          }
        >
          <div className="sb-nav-link-icon">
            <i className="fas fa-users"></i>
          </div>
          Stagiaires
        </NavLink>
        <NavLink
          to="/filieres"
          className={({ isActive }) =>
            classNames(isActive ? "active" : "", "nav-link")
          }
        >
          <div className="sb-nav-link-icon">
            <i className="fas fa-list"></i>
          </div>
          Filieres
        </NavLink>
        <NavLink
          to="/niveaux"
          className={({ isActive }) =>
            classNames(isActive ? "active" : "", "nav-link")
          }
        >
          <div className="sb-nav-link-icon">
            <i className="fas fa-layer-group"></i>
          </div>
          Niveaux
        </NavLink>
        <div className="sb-sidenav-menu-heading">Système</div>
        <a
          className="nav-link collapsed"
          href="#"
          data-bs-toggle="collapse"
          data-bs-target="#collapseLayouts"
          aria-expanded="false"
          aria-controls="collapseLayouts"
        >
          <div className="sb-nav-link-icon">
            <i className="fas fa-columns"></i>
          </div>
          Gestion
          <div className="sb-sidenav-collapse-arrow">
            <i className="fas fa-angle-down"></i>
          </div>
        </a>
        <div
          className="collapse"
          id="collapseLayouts"
          aria-labelledby="headingOne"
          data-bs-parent="#sidenavAccordion"
        >
          <nav className="sb-sidenav-menu-nested nav">
            <a className="nav-link" href="#">
              Utilisateurs
            </a>
            <a className="nav-link" href="#">
              Roles
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
