import { useState, useEffect } from "react";
import styled from "styled-components";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 420px;   /* fixed width like before */
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  color: white;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Total = styled.h3`
  margin: 15px 0;
  text-align: right;
  color:white;
`;

const Tracker = () => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // safer functional update
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const total = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0
  );

  return (
    <Wrapper>
      <Container>
        <Title>Expense Tracker</Title>
        <ExpenseForm addExpense={addExpense} />
        <Total>Total: ₹ {total.toFixed(2)}</Total>
        <ExpenseList
          expenses={expenses}
          deleteExpense={deleteExpense}
        />
      </Container>
    </Wrapper>
  );
};

export default Tracker;