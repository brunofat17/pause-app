import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

function DeleteUser() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/delete-user")}>Apagar utilizador</Button>
  );
}

export default DeleteUser;
