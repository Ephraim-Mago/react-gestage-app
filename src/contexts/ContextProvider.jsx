import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  appName: null,
  currentUser: {},
  userToken: null,
  toast: {
    message: null,
    show: false,
  },
  stagiaires: [],
  filieres: [],
  niveaux: [],
});

export const ContextProvider = ({ children }) => {
  const [appName, setAppName] = useState(import.meta.env.VITE_APP_NAME || "");
  const [currentUser, setCurrentUser] = useState({});
  const [userToken, _setUserToken] = useState(
    localStorage.getItem("TOKEN") || ""
  );
  const [stagiaires, setStagiaires] = useState([]);
  const [filieres, setFilieres] = useState([]);
  const [niveaux, setNiveaux] = useState([]);
  const [toast, setToast] = useState({ message: "", show: false });

  const setUserToken = (token) => {
    if (token) {
      localStorage.setItem("TOKEN", token);
    } else {
      localStorage.removeItem("TOKEN");
    }
    _setUserToken(token);
  };

  const showToast = (message) => {
    setToast({ message: message, show: true });
    setTimeout(() => {
      setToast({ message: "", show: false });
    }, 5000);
  };

  const fullName = () => {
    return currentUser && currentUser.first_name + " " + currentUser.last_name;
  };

  return (
    <StateContext.Provider
      value={{
        appName,
        setAppName,
        currentUser,
        fullName,
        setCurrentUser,
        userToken,
        setUserToken,
        toast,
        showToast,
        stagiaires,
        setStagiaires,
        filieres,
        setFilieres,
        niveaux,
        setNiveaux,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
