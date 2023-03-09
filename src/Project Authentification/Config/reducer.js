
const initialState = {
    fillieres: [
        { id: 1, nom: "Full stack" },
        { id: 2, nom: "Application Mobile" },
        { id: 3, nom: "RV/RA" }
    ],
    stagiaires: [
        { id: 1, nom: "Redouani", prenom: "Issa", filliere: "Full stack" },
        { id: 2, nom: "Kabbouri", prenom: "Mahjoub", filliere: "Application Mobile" },
        { id: 3, nom: "Chahri", prenom: "Houcine", filliere: "RV/RA" }
    ]
    , admins: [
        { nameusers: "admin1", pass: "pass1" },
        { nameusers: "admin2", pass: "pass2" },
        { nameusers: "admin3", pass: "pass3" }

    ]
    , errors: {
        nom: "Votre identifiant est incorrect.",
        password: "Votre mot de passe est incorrect."
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_Stagiare":
            return { ...state, stagiaires: [...state.stagiaires, action.payload] }
        case "Update_Stagiare":
            const stagiaire = state.stagiaires.find((u) => u.id === parseInt(action.payload.id))
            if (stagiaire) {
                stagiaire.nom = action.payload.nom;
                stagiaire.prenom = action.payload.prenom
                stagiaire.filliere = action.payload.filliere
            }
            return state;
        case "Delete_Stagiare":
            return { ...state, stagiaires: [...state.stagiaires.filter(u => u.id !== parseInt(action.payload))] }
        default:
            return state;
    }
}
export default reducer;