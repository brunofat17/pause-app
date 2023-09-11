import { useApp } from "../contexts/AppContext";

function Nutrição() {
  const { logInUserType } = useApp();

  return (
    <>
      {!logInUserType &&
        "Deve fazer o log in para consultar a secção de nutrição"}

      {logInUserType && "Nutrição"}
    </>
  );
}

export default Nutrição;
