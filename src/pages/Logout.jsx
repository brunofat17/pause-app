import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(
    function () {
      const timer = setTimeout(() => {
        navigate("/homepage");
      }, 2000);

      return () => clearTimeout(timer);
    },
    [navigate]
  );
  return (
    <div>
      Saiste da tua conta, vais ser redireccionado para a página principal
    </div>
  );
}

export default Logout;
