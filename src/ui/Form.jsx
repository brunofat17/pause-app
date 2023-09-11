import { styled } from "styled-components";

export const Form = styled.form`
  margin-top: 30px;
  width: 150px;
  display: flex;
  flex-direction: column;
  color: var(--color-grey-100);
`;

export const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  /* &:not(:last-child) {
  border-bottom: 1px solid var(--color-grey-100);
} */

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

export const Input = styled.input`
  height: 32px;
  color: var(--color-grey-700);
  border: 1px solid var(--color-grey-300);
  background-color: var() (--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shodow-sm);
`;

export const Select = styled.select`
  width: 220px;
  height: 32px;
  font-size: 13px;
  color: var(--color-grey-700);
  border: 1px solid var(--color-grey-300);
  background-color: var() (--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shodow-sm);
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Submit = styled.input`
  height: 30px;
  color: var(--color-grey-700);
  border: 1px solid var(--color-grey-300);
  background-color: var() (--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: var(--shodow-sm);
  margin-top: 10px;
`;

export const Div = styled.div`
  width: 482px;
  display: flex; /* Use flexbox to position elements */
  justify-content: flex-end; /* Push the button to the right side */
  padding: 0px;
`;
