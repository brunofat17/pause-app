import { useState } from "react";
import { useApp } from "../contexts/AppContext";

import Button from "../ui/Button";

import AvaliaçãoDisplay from "../features/avaliação/AvaliaçãoDisplay";
import CreateAvaliaçãoForm from "../features/avaliação/CreateAvaliaçãoForm";

function Avaliação() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAssessementId, setCurrentAssessementId] = useState();
  const { logInUserType, users, activeUserName } = useApp();

  return (
    <>
      <h2>
        {logInUserType === "admin" ? "Criar avaliação" : "Consultar Avaliações"}
      </h2>

      {!logInUserType &&
        "Deve fazer o log in para consultar a secção de avaliação"}

      {logInUserType === "admin" &&
        (isOpen ? (
          <CreateAvaliaçãoForm setIsOpen={setIsOpen} />
        ) : (
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen === false ? "Nova avaliação" : "Fechar"}
          </Button>
        ))}

      {logInUserType === "user" &&
        (users.find((user) => user.userName === activeUserName)?.assessements
          ?.length > 0 ? (
          isOpen ? (
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
                    Avaliação de {assessement.month} {assessement.year}
                  </Button>
                </ul>
              ))
          )
        ) : (
          <span>Nenhuma avaliação disponível</span>
        ))}
    </>
  );
}

export default Avaliação;
