import { useState } from "react";
import { useApp } from "../contexts/AppContext";

import Button from "../ui/Button";
import NutriçãoDislplay from "../features/nutrição/NutriçãoDisplay";
import CreateNutriPlan from "../features/nutrição/CreateNutriPlan";

function Nutrição() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNutriPlanId, setCurrentNutriPlanId] = useState();
  const { logInUserType, users, activeUserName } = useApp();

  return (
    <>
      <h2>Consultar Plano de Nutrição</h2>
      {!logInUserType &&
        "Deve fazer o log in para consultar a secção de nutrição"}

      {logInUserType === "admin" &&
        (isOpen ? (
          <CreateNutriPlan setIsOpen={setIsOpen} />
        ) : (
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen === false ? "Novo plano" : "Fechar"}
          </Button>
        ))}

      {logInUserType === "user" &&
        (users.find((user) => user.userName === activeUserName)?.nutriPlans
          ?.length > 0 ? (
          isOpen ? (
            <>
              <NutriçãoDislplay nutriPlanId={currentNutriPlanId} />
              <Button onClick={() => setIsOpen(false)}>Voltar</Button>
            </>
          ) : (
            users
              .find((user) => user.userName === activeUserName)
              ?.nutriPlans?.map((nutriPlan) => (
                <ul key={nutriPlan.id}>
                  <Button
                    onClick={() => {
                      setIsOpen(true);
                      setCurrentNutriPlanId(nutriPlan.id);
                    }}
                  >
                    Plano nutricional de {nutriPlan.date}
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

export default Nutrição;
