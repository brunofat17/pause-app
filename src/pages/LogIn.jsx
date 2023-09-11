import { useForm } from "react-hook-form";
import { Div, Form, FormRow, Input, Label, Submit } from "../ui/Form";
import { useApp } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const { register, handleSubmit } = useForm();
  const { login, logout } = useApp();
  const navigate = useNavigate();

  function onSubmit({ loginUserName, loginPassword }) {
    console.log(loginUserName, loginPassword);
    login(loginUserName, loginPassword);
    navigate("/homepage");

    return;
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="loginUserName">Username</Label>
        <Input {...register("loginUserName")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="loginPassword">Password</Label>
        <Input {...register("loginPassword")} />
      </FormRow>
      <Div>
        <Submit type="submit" value="Concluído" />
      </Div>
    </Form>
  );
}

export default LogIn;
