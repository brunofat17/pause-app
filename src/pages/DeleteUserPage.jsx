import { useApp } from "../contexts/AppContext";
import Button from "../ui/Button";

function DeleteUserPage() {
  const { users, deleteUser } = useApp();

  function handleDelete(userName) {
    deleteUser(userName);
  }

  return (
    <>
      {users.map((user) => (
        <div key={user.userName}>
          <Button onClick={() => handleDelete(user.userName)}>
            {user.userName}
          </Button>
        </div>
      ))}
    </>
  );
}

export default DeleteUserPage;
