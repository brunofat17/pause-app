import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

// FAKE_ADMIN = {
//   userName: "admin",
//   password: "admin",
//   userType: "admin",
// };

// FAKE_USER = {
//   userName: "user",
//   password: "user",
//   userType: "user",
//   assessements: {},
// };

const initialState = {
  users: [
    {
      userName: "admin",
      password: "admin",
      userType: "admin",
    },
    {
      userName: "user",
      password: "user",
      userType: "user",
      assessements: [
        { month: "february", year: 2023, id: 1 },
        { month: "march", year: 2023, id: 2 },
      ],
    },
  ],
  activeUserName: "",
  logInUserType: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "assessement/submit":
      console.log(state.users);
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.userName.toString() === action.payload.name.toString()) {
            return {
              ...user,
              assessements: [...user.assessements, action.payload],
            };
          }
          return user;
        }),
      };

    case "assessement/consult":
      return;

    case "account/createUser":
      return;

    case "account/login":
      if (
        state.users
          .filter((user) => action.payloadUserName === user.userName)
          .some((user) => action.payloadPassword === user.password)
      )
        return {
          ...state,
          activeUserName: action.payloadUserName.toString(),
          logInUserType: state.users.find(
            (user) => user.userName === action.payloadUserName
          ).userType,
        };
      else {
        return console.log("username or password are not valid");
      }

    case "account/logout":
      return {
        ...state,
        activeUserName: "",
        logInUserType: "",
      };

    default:
      return state;
  }
}

function AppProvider({ children }) {
  // State
  const [{ users, activeUserName, logInUserType }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // Handle functions
  function login(loginUserName, loginsPassword) {
    dispatch({
      type: "account/login",
      payloadUserName: loginUserName,
      payloadPassword: loginsPassword,
    });
  }

  function logout() {
    dispatch({ type: "account/logout" });
  }

  function applyForm(assessementObject) {
    dispatch({
      type: "assessement/submit",
      payload: assessementObject,
    });
  }

  return (
    <AppContext.Provider
      value={{ users, activeUserName, login, logout, logInUserType, applyForm }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useApp };
