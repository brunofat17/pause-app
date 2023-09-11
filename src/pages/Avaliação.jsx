import { useState } from "react";
import { useApp } from "../contexts/AppContext";

import Button from "../ui/Button";
import AvaliaçãoForm from "../features/Avaliação/CreateAvaliaçãoForm";
import AvaliaçãoDisplay from "../ui/AvaliaçãoDisplay";

function Avaliação() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAssessementId, setCurrentAssessementId] = useState();
  const { logInUserType, users, activeUserName } = useApp();

  return (
    <>
      {!logInUserType && "Deve fazer o log in para consultar a avaliação"}

      {logInUserType === "admin" && (
        <Button onClick={() => setIsOpen(!isOpen)}>
          {isOpen === false ? "Nova avaliação" : "Fechar"}
        </Button>
      )}
      {logInUserType === "admin" && isOpen && (
        <AvaliaçãoForm setIsOpen={setIsOpen} />
      )}

      {logInUserType === "user" && isOpen ? (
        <>
          <AvaliaçãoDisplay assessementId={currentAssessementId} />
          <Button onClick={() => setIsOpen(false)}>Voltar</Button>
        </>
      ) : (
        users
          .find((user) => user.userName === activeUserName)
          ?.assessements?.map((assessement) => (
            <ul key={assessement.id}>
              <Button
                onClick={() => {
                  setIsOpen(true);
                  setCurrentAssessementId(assessement.id);
                }}
              >
                avaliacao de {assessement.month} {assessement.year}
              </Button>
            </ul>
          ))
      )}
    </>
  );
}

export default Avaliação;
