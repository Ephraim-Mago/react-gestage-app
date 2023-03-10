import { Link } from "react-router-dom";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";

export default function Home() {
  const { stagiaires } = useStateContext();

  return (
    <PageComponent title="Dashboard">
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body">
              <h3>Nos stagiaires <span className="fs-6 fw-lighter">({stagiaires.length} au total)</span></h3>
              
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link to="/stagiaires" className="small text-white stretched-link">
                Voir en détails
              </Link>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageComponent>
  );
}
