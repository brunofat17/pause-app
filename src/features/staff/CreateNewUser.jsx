import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button";

function CreateNewUser() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/new-user")}>Criar novo utilizador</Button>
  );
}

export default CreateNewUser;
