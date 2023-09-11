import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import {
  Div,
  Form,
  FormRow,
  Input,
  Label,
  Select,
  Submit,
} from "../../ui/Form";
import { useApp } from "../../contexts/AppContext";

function AvaliaçãoForm({ setIsOpen }) {
  const { register, handleSubmit } = useForm();
  const { applyForm } = useApp();

  function onSubmit({
    name,
    gender,
    year,
    month,
    height,
    weight,
    imc,
    fatFreeMassPercentage,
    fatpercentage,
    visceralFat,
    metabolicAge,
  }) {
    let assessementObject = {
      name,
      gender,
      year,
      month,
      height,
      weight,
      imc,
      fatFreeMassPercentage,
      fatpercentage,
      visceralFat,
      metabolicAge,
      id: crypto.randomUUID(),
    };
    applyForm(assessementObject);

    setIsOpen(false);
  }

  function onError() {
    console.log("test errors");
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow>
        <Label htmlFor="name">Nome</Label>
        <Input {...register("name")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="gender">Género</Label>
        <Select {...register("gender")}>
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
          <option value="other">Outro</option>
        </Select>
      </FormRow>

      <FormRow>
        <Label htmlFor="year">Ano</Label>
        <Select {...register("year")}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label htmlFor="month">Mês</Label>
        <Select {...register("month")}>
          <option value="january">Janeiro</option>
          <option value="february">Fevereiro</option>
          <option value="march">Março</option>
          <option value="april">Abril</option>
          <option value="may">Maio</option>
          <option value="june">Junho</option>
          <option value="july">Julho</option>
          <option value="august">Agosto</option>
          <option value="september">Setembro</option>
          <option value="october">Outubro</option>
          <option value="november">Novembro</option>
          <option value="december">Dezembro</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label htmlFor="height">Altura</Label>
        <Input {...register("height")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="weight">Peso</Label>
        <Input {...register("weight")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="imc">IMC</Label>
        <Input {...register("imc")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="fatPercentage">Percentagem de massa gorda</Label>
        <Input {...register("fatPercentage")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="fatFreeMassPercentage">
          Percentagem de massa magra
        </Label>
        <Input {...register("fatFreeMassPercentage")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="visceralFat">Gordura Visceral</Label>
        <Input {...register("visceralFat")} />
      </FormRow>
      <FormRow>
        <Label htmlFor="metabolicAge">Idade Metabólica</Label>
        <Input {...register("metabolicAge")} />
      </FormRow>
      <Div>
        <Submit type="submit" value="Concluído" />
      </Div>
    </Form>
  );
}
export default AvaliaçãoForm;
