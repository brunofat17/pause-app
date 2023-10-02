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
      assessements: [],
      nutriPlans: [],
      trainingPlans: [],
    },
  ],
  activeUserName: "",
  logInUserType: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "assessement/submit":
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

    case "nutrition/submit":
      return {
        ...state,
        users: state.users.map((user) => {
          console.log(action.payload);
          if (user.userName.toString() === action.payload.name.toString()) {
            return {
              ...user,
              nutriPlans: [...user.nutriPlans, action.payload],
            };
          }
          return user;
        }),
      };

    case "trainingPlan/submit":
      return {
        ...state,
        users: state.users.map((user) => {
          console.log(action.payload);
          if (user.userName.toString() === action.payload.name.toString()) {
            return {
              ...user,
              trainingPlans: [...user.trainingPlans, action.payload],
            };
          }
          return user;
        }),
      };

    case "account/createNewUser":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "account/deleteUser":
      return {
        ...state,
        users: state.users.filter((user) => user.userName !== action.payload),
      };

    case "account/login":
      if (
        state.users
          .filter((user) => user.userName === action.payloadUserName)
          .some((user) => user.password === action.payloadPassword)
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

  function applyNewUserForm(newUser) {
    dispatch({
      type: "account/createNewUser",
      payload: newUser,
    });
  }

  function deleteUser(userName) {
    dispatch({
      type: "account/deleteUser",
      payload: userName,
    });
  }

  function applyAssessementForm(assessementObject) {
    dispatch({
      type: "assessement/submit",
      payload: assessementObject,
    });
  }

  function createNutriPlan(nutriPlan, name, date) {
    dispatch({
      type: "nutrition/submit",
      payload: { nutriPlan, name, date, id: crypto.randomUUID() },
    });
  }

  function createTrainingPlan(trainingPlan, name, date) {
    dispatch({
      type: "trainingPlan/submit",
      payload: { trainingPlan, name, date, id: crypto.randomUUID() },
    });
  }

  return (
    <AppContext.Provider
      value={{
        users,
        activeUserName,
        login,
        logout,
        logInUserType,
        applyAssessementForm,
        applyNewUserForm,
        deleteUser,
        createNutriPlan,
        createTrainingPlan,
      }}
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
