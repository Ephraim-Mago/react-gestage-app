import PageComponent from "../components/PageComponent";
import TButton from "../components/core/TButton";
import { useStateContext } from "../contexts/ContextProvider";

export default function Niveaux() {
  const { niveaux } = useStateContext();

  return (
    <PageComponent title="Niveaux">
      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between">
          <p>
            <i className="fas fa-table me-1"></i>
            Liste de niveaux
          </p>
          <TButton classes="btn btn-primary" to="/niveaux/create">
            <i className="fas fa-plus me-1"></i>
            Nouveau
          </TButton>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table id="datatablesSimple" className="table table-bordered">
              <thead>
                <tr>
                  <th>Libelle</th>
                  <th>Code</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Libelle</th>
                  <th>Code</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                {niveaux.map((niveau) => (
                  <tr key={niveau.id}>
                    <td>{niveau.name}</td>
                    <td>{niveau.code}</td>
                    <td className="d-flex">
                      <TButton
                        to={`/niveaux/${niveau.id}`}
                        classes="btn d-flex justify-content-center"
                      >
                        <i className="fas fa-edit"></i>
                      </TButton>
                      <button className="btn text-danger d-flex justify-content-center">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageComponent>
  );
}
