import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.2);
  outline: none;
  font-size: 15px;
  font-weight: 500;
  background: white;
  color: black;
  transition: 0.2s ease;

  &::placeholder {
    color: rgba(0,0,0,0.5);
    font-weight: 400;
  }

  &:focus {
    border: 1px solid #6c63ff;
    box-shadow: 0 0 0 2px rgba(108,99,255,0.2);
  }
    &::-webkit-calendar-picker-indicator {
  filter: invert(1);
  cursor: pointer;
}
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  color: white;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 75, 43, 0.5);
  }
`;

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category || !date) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount,
      category,
      date,
    };

    addExpense(newExpense);

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title  eg: Groceries"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Category eg: Food, Transport"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button type="submit">Add Expense</Button>
    </Form>
  );
};

export default ExpenseForm;