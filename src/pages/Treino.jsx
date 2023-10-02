import { useState } from "react";
import { useApp } from "../contexts/AppContext";
import CreateTrainingPlan from "../features/plano treino/CreateTrainingPlan";
import PlanoTreinoDisplay from "../features/plano treino/PlanoTreinoDisplay";
import Button from "../ui/Button";

function Treino() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTrainingPlan, setCurrentTrainingPlanId] = useState();
  const { logInUserType, users, activeUserName } = useApp();

  return (
    <>
      <h2>Consultar Planos de treino</h2>

      {!logInUserType &&
        "Deve fazer o log in para consultar a secção de planos de treino"}

      {logInUserType === "admin" &&
        (isOpen ? (
          <CreateTrainingPlan setIsOpen={setIsOpen} />
        ) : (
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen === false ? "Novo plano" : "Fechar"}
          </Button>
        ))}

      {logInUserType === "user" &&
        (users.find((user) => user.userName === activeUserName)?.trainingPlans
          ?.length > 0 ? (
          isOpen ? (
            <>
              <PlanoTreinoDisplay trainingPlanId={currentTrainingPlan} />
              <Button onClick={() => setIsOpen(false)}>Voltar</Button>
            </>
          ) : (
            users
              .find((user) => user.userName === activeUserName)
              ?.trainingPlans?.map((trainingPlan) => (
                <ul key={trainingPlan.id}>
                  <Button
                    onClick={() => {
                      setIsOpen(true);
                      setCurrentTrainingPlanId(trainingPlan.id);
                    }}
                  >
                    Plano de {trainingPlan.date}
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

export default Treino;
