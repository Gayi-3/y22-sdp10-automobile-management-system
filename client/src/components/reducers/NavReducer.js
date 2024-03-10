const initState = "Login"
export default function NavReducer(state=initState, action){
    switch(action.type) {
        case "Login":
            return "Login";
        case "Registration":
            return "Registration";
        case "Profile":
            return "Profile";
        case "Entry":
            return "Entry";
        case "Home":
            return "Home";
        case "Details":
            return "Details";
        case "Detail":
            return "Detail";
        default:
            return "Login";
    }

}