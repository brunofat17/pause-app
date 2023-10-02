import styled from "styled-components";
import Button from "./Button";

const Span = styled.span`
  margin-right: 10px;
`;

function Item({ item, setList, list }) {
  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <li>
      <Span>{item.name}</Span>
      <Button onClick={() => handleRemove(item.id)}>X</Button>
    </li>
  );
}

export default Item;
