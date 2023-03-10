import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";

export default function StagiaireView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { filieres, stagiaires, showToast } = useStateContext();
  const [stagiaire, setStagiaire] = useState({
    first_name: "",
    last_name: "",
    genre: "",
    email: "",
    image: "",
    active: 0,
    filiere_id: "",
  });

  const genres = [
    {
      name: "Masculin",
      code: "M",
    },
    {
      name: "Féminin",
      code: "F",
    },
  ];

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setStagiaire({ ...stagiaire, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    navigate("/stagiaires");
    if (id) {
      showToast("Stagiaire updated successful");
    } else {
      showToast("Stagiaire created successful");
    }
  };

  useEffect(() => {
    if (id) {
      setStagiaire(stagiaires.find((item) => item.id == id));
      //setStagiaire(stagiaires.find((item) => item.id == id));
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
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="firstname">Prénom</label>
              <input
                id="firstname"
                name="first_name"
                value={stagiaire.first_name}
                onChange={(ev) => handleChange(ev)}
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="lastname">Nom</label>
              <input
                id="lastname"
                name="last_name"
                value={stagiaire.last_name}
                onChange={(ev) => handleChange(ev)}
                type="text"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="sexe">Sexe</label>
              <select
                className="form-select"
                id="sexe"
                aria-label="Default select example"
                name="genre"
                onChange={(ev) => handleChange(ev)}
                required
              >
                {genres.map((genre, i) => (
                  <option
                    key={i}
                    value={genre.code}
                    selected={genre.code == stagiaire.genre}
                  >
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              <label htmlFor="email">Adresse e-mail</label>
              <input
                id="email"
                name="email"
                value={stagiaire.email}
                onChange={(ev) => handleChange(ev)}
                type="email"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="file">Image</label>
              <input
                id="file"
                name="image"
                onChange={(ev) => handleChange(ev)}
                type="file"
                className="form-control"
              />
            </div>
            <div className="col">
              <label htmlFor="status">Status</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="active"
                  onChange={(ev) => handleChange(ev)}
                  id="flexRadioDefault1"
                  checked={stagiaire.active == "1"}
                  value="1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Active
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="active"
                  onChange={(ev) => handleChange(ev)}
                  id="flexRadioDefault2"
                  checked={stagiaire.active == "0"}
                  value="0"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Desactiver
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="filiere" className="form-label">
              Filière
            </label>
            <select
              name="filiere_id"
              id="filiere"
              className="form-control"
              onChange={(ev) => handleChange(ev)}
              required
            >
              {filieres.map((filiere) => (
                <option
                  key={filiere.id}
                  value={filiere.id}
                  selected={stagiaire.filiere_id == filiere.id}
                >
                  {filiere.name}
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
