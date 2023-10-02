import { useApp } from "../../contexts/AppContext";

function AvaliaçãoDisplay({ assessementId }) {
  const { users, activeUserName } = useApp();

  const displayAssessement = users
    .find((user) => user.userName === activeUserName)
    .assessements.find((a) => a.id === assessementId);

  console.log(displayAssessement);

  return (
    <>
      <div>
        Data:
        <span>
          {" "}
          {displayAssessement.month} {displayAssessement.year}
        </span>
      </div>
      <div>
        Peso:
        <span> {displayAssessement.weight}</span>
      </div>
      <div>
        IMC:
        <span> {displayAssessement.weight}</span>
      </div>
      <div>
        Peso:
        <span> {displayAssessement.imc}</span>
      </div>
      <div>
        % Massa Gorda
        <span> {displayAssessement.fatpercentage}</span>
      </div>
      <div>
        % Massa Magra:
        <span> {displayAssessement.fatFreeMassPercentage}</span>
      </div>
      <div>
        Gordura Visceral:
        <span> {displayAssessement.visceralFat}</span>
      </div>
      <div>
        Idade Metabólica:
        <span> {displayAssessement.metabolicAge}</span>
      </div>
    </>
  );
}

export default AvaliaçãoDisplay;
