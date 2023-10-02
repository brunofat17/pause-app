import styled from "styled-components";
import { useApp } from "../../contexts/AppContext";
import { Input, Label } from "../../ui/Form";
import Button from "../../ui/Button";
import { useState } from "react";

const StyledContainer = styled.div`
  margin-top: 20px;
`;

const StyledInput = styled.input`
  margin-top: 15px;
`;

function CreateTrainingPlan({ setIsOpen }) {
  const { createTrainingPlan } = useApp();
  const [currentTrainingPlan, SetCurrentTrainingPlan] = useState({});
  const [currentName, setCurrentName] = useState("");
  const [currentData, setCurrentData] = useState("");

  function onClick(currentTrainingPlan, currentName, currentData) {
    createTrainingPlan(currentTrainingPlan, currentName, currentData);
    setIsOpen(false);
  }

  return (
    <StyledContainer>
      <Label>Nome </Label>
      <StyledInput
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
      />
      <div>
        <Label>Data </Label>
        <StyledInput
          value={currentData}
          onChange={(e) => setCurrentData(e.target.value)}
        />
      </div>
      <div>
        <Label>Plano (usar PDF na pasta public) </Label>
        <StyledInput
          type="file"
          onChange={(e) => SetCurrentTrainingPlan(e.target.files[0])}
        />
      </div>
      <Button
        onClick={() => {
          onClick(currentTrainingPlan, currentName, currentData);
          setIsOpen(false);
        }}
      >
        Criar
      </Button>
    </StyledContainer>
  );
}

export default CreateTrainingPlan;
