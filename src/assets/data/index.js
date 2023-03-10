export default function useFakeData() {
  const users = [
    {
      id: 1,
      first_name: "Ephraim",
      last_name: "Mago",
      email: "ephraimmago@gmail.com",
      password: "Mago1234",
      role: "admin",
      active: true,
    },
    {
      id: 2,
      first_name: "Guest",
      last_name: "1",
      email: "guest-1@gmail.com",
      password: "Guest1234",
      role: "guest",
      active: true,
    },
    {
      id: 3,
      first_name: "Guest",
      last_name: "2",
      email: "guest-2@gmail.com",
      password: "Guest1234",
      role: "guest",
      active: false,
    },
  ];

  const niveaux = [
    {
      id: 1,
      name: "Qualification",
      code: "Q",
    },
    {
      id: 2,
      name: "Technicien",
      code: "T",
    },
    {
      id: 3,
      name: "Technicien Spécialisé",
      code: "TS",
    },
    {
      id: 4,
      name: "Licence",
      code: "L",
    },
    {
      id: 5,
      name: "Master",
      code: "M",
    },
  ];

  const filieres = [
    {
      id: 1,
      name: "TSDI",
      code: "TSDI",
      niveau_id: 3,
    },
    {
      id: 2,
      name: "TSGE",
      code: "TSGE",
      niveau_id: 3,
    },
    {
      id: 3,
      name: "TGI",
      code: "TGI",
      niveau_id: 2,
    },
    {
      id: 4,
      name: "TSRI",
      code: "TSRI",
      niveau_id: 3,
    },
    {
      id: 5,
      name: "TSMI",
      code: "TSMI",
      niveau_id: 3,
    },
    {
      id: 6,
      name: "TCE",
      code: "TCE",
      niveau_id: 2,
    },
  ];

  const stagiaires = [
    {
      id: 1,
      first_name: "Gédéon",
      last_name: "Munganga",
      genre: "M",
      email: "gedeon-munganga@gmail.com",
      image:
        "https://e7.pngegg.com/pngimages/698/39/png-clipart-computer-icons-user-profile-info-miscellaneous-face.png",
      active: false,
      filiere_id: 1,
    },
    {
      id: 2,
      first_name: "Ruben",
      last_name: "Mulamba",
      genre: "M",
      email: "ruben-mulamba@gmail.com",
      image:
        "https://e7.pngegg.com/pngimages/698/39/png-clipart-computer-icons-user-profile-info-miscellaneous-face.png",
      active: true,
      filiere_id: 1,
    },
    {
      id: 3,
      first_name: "Divin",
      last_name: "Badidi",
      genre: "M",
      email: "divin-badidi@gmail.com",
      image:
        "https://e7.pngegg.com/pngimages/698/39/png-clipart-computer-icons-user-profile-info-miscellaneous-face.png",
      active: true,
      filiere_id: 1,
    },
    {
      id: 4,
      first_name: "Julie",
      last_name: "Mukona",
      genre: "F",
      email: "julie-mukona@gmail.com",
      image:
        "https://e7.pngegg.com/pngimages/698/39/png-clipart-computer-icons-user-profile-info-miscellaneous-face.png",
      active: true,
      filiere_id: 2,
    },
    {
      id: 5,
      first_name: "Bénédicte",
      last_name: "Dembo",
      genre: "F",
      email: "benedicte-dembo@gmail.com",
      image:
        "https://e7.pngegg.com/pngimages/698/39/png-clipart-computer-icons-user-profile-info-miscellaneous-face.png",
      active: false,
      filiere_id: 2,
    },
    {
      id: 6,
      first_name: "Sarah",
      last_name: "Zola",
      genre: "F",
      email: "sarah-zola@gmail.com",
      image:
        "https://e7.pngegg.com/pngimages/698/39/png-clipart-computer-icons-user-profile-info-miscellaneous-face.png",
      active: false,
      filiere_id: 3,
    },
    {
      id: 7,
      first_name: "Anarose",
      last_name: "Otshope",
      genre: "F",
      email: "rose-otshope@gmail.com",
      image:
        "https://e7.pngegg.com/pngimages/698/39/png-clipart-computer-icons-user-profile-info-miscellaneous-face.png",
      active: false,
      filiere_id: 4,
    },
    {
      id: 8,
      first_name: "Claudine",
      last_name: "Kelete",
      genre: "F",
      email: "claudine-kelete@gmail.com",
      image:
        "https://e7.pngegg.com/pngimages/698/39/png-clipart-computer-icons-user-profile-info-miscellaneous-face.png",
      active: true,
      filiere_id: 5,
    },
    {
      id: 9,
      first_name: "Abidane",
      last_name: "Luka",
      genre: "F",
      email: "abi-luka@gmail.com",
      image:
        "https://e7.pngegg.com/pngimages/698/39/png-clipart-computer-icons-user-profile-info-miscellaneous-face.png",
      active: true,
      filiere_id: 5,
    },
  ];

  return {
    users,
    niveaux,
    filieres,
    stagiaires,
  };
}
