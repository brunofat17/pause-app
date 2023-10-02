import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import { Div, FormRow, Label, Select, Submit, Form } from "../ui/Form";
import { useForm } from "react-hook-form";
import { useApp } from "../contexts/AppContext";

function NewUserForm() {
  const { register, handleSubmit, watch } = useForm();
  const password = watch("password");
  const { applyNewUserForm } = useApp();
  const navigate = useNavigate();

  function onSubmit({ userName, password, userType }) {
    let newUser = {
      userName,
      password,
      userType,
      assessements: [],
      nutriPlans: [],
      trainingPlans: [],
    };
    applyNewUserForm(newUser);
    navigate("/");
  }

  function onError(e) {
    console.log(e);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow>
        <Label htmlFor="userName">Nome</Label>
        <Input
          {...register("userName", {
            required: true,
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="password">Password</Label>
        <Input
          {...register("password", {
            required: true,
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="confirmedPassword">Confirmar Password</Label>
        <Input
          {...register("confirmedPassword", {
            // validate: (value) => (value = password),
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="userType">Tipo de utilizador</Label>
        <Select {...register("userType")}>
          <option value="user">Cliente</option>
          <option value="staff">Staff</option>
        </Select>
      </FormRow>

      <FormRow>
        <Div>
          <Submit type="submit" value="Criar" />
        </Div>
      </FormRow>
    </Form>
  );
}

export default NewUserForm;
