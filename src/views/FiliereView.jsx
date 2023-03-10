import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";

export default function FiliereView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { filieres, niveaux, showToast } = useStateContext();
  const [filiere, setFiliere] = useState({
    name: "",
    code: "",
    niveau_id: "",
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFiliere({ ...filiere, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    navigate("/filieres");
    if (id) {
      showToast("Filiere updated successful");
    } else {
      showToast("Filiere created successful");
    }
  };

  useEffect(() => {
    if (id) {
      setFiliere(filieres.find((item) => item.id == id));
    }
  }, []);

  return (
    <PageComponent
      title={!id ? "Création d'une filière" : "Edition d'une filière"}
    >
      <form
        onSubmit={handleSubmit}
        method="post"
        className="row d-flex justify-content-center"
      >
        <div className="col-md-6 shadow rounded py-3 px-3">
          <div className="mb-3">
            <label htmlFor="libelle" className="form-label">
              Libelle
            </label>
            <input
              type="text"
              name="name"
              onChange={(ev) => handleChange(ev)}
              value={filiere.name}
              className="form-control"
              id="libelle"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="code" className="form-label">
              Code
            </label>
            <input
              type="text"
              name="code"
              onChange={(ev) => handleChange(ev)}
              value={filiere.code}
              className="form-control"
              id="code"
              placeholder="Q, TS, M, L"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="niveau" className="form-label">
              Niveau
            </label>
            <select
              name="niveau_id"
              id="niveau"
              className="form-control"
              onChange={(ev) => handleChange(ev)}
            >
              {niveaux.map((niveau) => (
                <option key={niveau.id} value={niveau.id} selected={filiere.niveau_id == niveau.id}>
                  {niveau.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 d-flex justify-content-end">
            <button className="btn btn-primary">Enregistrer</button>
          </div>
        </div>
      </form>
    </PageComponent>
  );
}
