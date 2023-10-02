import { useApp } from "../contexts/AppContext";
import DeleteUser from "../features/staff/DeleteUser";
import TodoList from "../features/staff/TodoList";
import CreateNewUser from "../features/staff/createNewUser";

function Staff() {
  const { logInUserType } = useApp();
  return logInUserType ? (
    <>
      <div>
        <TodoList />
      </div>
      <div>
        Gestão de Utilizadores
        <div>
          <CreateNewUser />
        </div>
        <div>
          <DeleteUser />
        </div>
      </div>
      {/* <div>Resumo clientes fisio??</div>
      <div>Horario semanal</div> */}
    </>
  ) : (
    <div> Só disponível para Staff </div>
  );
}

export default Staff;
