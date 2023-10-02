import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Item from "../../ui/Item";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-bottom: 150px;
`;

function TodoList() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isSubmiting, setIsSubmiting] = useState(false);

  function handleSubmit() {
    setIsSubmiting(true);
    const newItem = { name: input, id: crypto.randomUUID() };
    const newList = [...list, newItem];
    setList(newList);
    setInput("");
    setIsSubmiting(false);
  }

  return (
    <StyledDiv>
      <h2>To Do List</h2>
      <div>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isSubmiting}
        ></Input>
        <Button onClick={handleSubmit} disabled={isSubmiting}>
          Adicionar
        </Button>
      </div>
      <ul>
        {list.map((item) => (
          <Item item={item} key={item.id} list={list} setList={setList} />
        ))}
      </ul>
    </StyledDiv>
  );
}

export default TodoList;
