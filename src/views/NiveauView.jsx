import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";

export default function NiveauView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { niveaux, showToast } = useStateContext();
  const [niveau, setNiveau] = useState({
    name: "",
    code: "",
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setNiveau({ ...niveau, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    navigate("/niveaux");
    if (id) {
      showToast("Niveau updated successful");
    } else {
      showToast("Niveau created successful");
    }
  };

  useEffect(() => {
    if (id) {
      setNiveau(niveaux.find((item) => item.id == id));
    }
  }, []);

  return (
    <PageComponent title={!id ? "Création d'un niveau" : "Edition d'un niveau"}>
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
              value={niveau.name}
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
              value={niveau.code}
              className="form-control"
              id="code"
              placeholder="Q, TS, M, L"
              required
            />
          </div>
          <div className="mb-3 d-flex justify-content-end">
            <button className="btn btn-primary">Enregistrer</button>
          </div>
        </div>
      </form>
    </PageComponent>
  );
}
