import { useApp } from "../contexts/AppContext";
import TodoList from "../features/staff/TodoList";
import CreateNewUser from "../features/staff/createNewUser";

function Staff() {
  const { logInUserType } = useApp();
  return logInUserType ? (
    <>
      <TodoList />
      <CreateNewUser />
      <div>Resumo clientes fisio??</div>
      <div>Horario semanal</div>
    </>
  ) : (
    <div> Só disponível para Staff </div>
  );
}

export default Staff;
