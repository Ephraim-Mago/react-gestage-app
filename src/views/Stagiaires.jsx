import PageComponent from "../components/PageComponent";
import TButton from "../components/core/TButton";
import { useStateContext } from "../contexts/ContextProvider";

export default function Stagiaires() {
  const { stagiaires, filieres } = useStateContext();
  // const [stagiaires, setStagiaires] = useState([]);
  return (
    <PageComponent title="Stagiaires">
      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between">
          <p>
            <i className="fas fa-table me-1"></i>
            Liste de stagiaires
          </p>
          <TButton classes="btn btn-primary" to="/stagiaires/create">
            <i className="fas fa-plus me-1"></i>
            Nouveau
          </TButton>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table id="datatablesSimple" className="table table-bordered">
              <thead>
                <tr>
                  <th>Prénom</th>
                  <th>Nom</th>
                  <th>E-mail</th>
                  <th>Filière</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Photo</th>
                  <th>Prénom</th>
                  <th>Nom</th>
                  <th>E-mail</th>
                  <th>Filière</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                {stagiaires.map((stagiaire) => (
                  <tr key={stagiaire.id}>
                    <td>
                      <img
                        src={stagiaire.image}
                        width="30px"
                        alt={stagiaire.id}
                      />
                    </td>
                    <td>{stagiaire.first_name}</td>
                    <td>{stagiaire.last_name}</td>
                    <td>{stagiaire.email}</td>
                    <td>
                      {
                        filieres.find(
                          (filiere) => filiere.id === stagiaire.filiere_id
                        ).name
                      }
                    </td>
                    <td>{stagiaire.active ? "Activé" : "Desactiver"}</td>
                    <td className="d-flex">
                      <button className="btn text-primary d-flex justify-content-center">
                        <i className="fas fa-eye"></i>
                      </button>
                      <TButton
                        to={`/stagiaires/${stagiaire.id}`}
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
