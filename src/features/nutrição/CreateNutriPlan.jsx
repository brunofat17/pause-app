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

function CreateNutriPlan({ setIsOpen }) {
  const { createNutriPlan } = useApp();
  const [currentNutriPlan, SetCurrentNutriPlan] = useState({});
  const [currentName, setCurrentName] = useState("");
  const [currentData, setCurrentData] = useState("");

  function onClick(currentNutriPlan, currentName, currentData) {
    createNutriPlan(currentNutriPlan, currentName, currentData);
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
          onChange={(e) => SetCurrentNutriPlan(e.target.files[0])}
        />
      </div>
      <Button
        onClick={() => onClick(currentNutriPlan, currentName, currentData)}
      >
        Criar
      </Button>
    </StyledContainer>
  );
}

export default CreateNutriPlan;
