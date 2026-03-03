import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <List>
      {expenses.length === 0 && <p>No expenses added yet.</p>}
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
        />
      ))}
    </List>
  );
};

const List = styled.div`
  max-height: 250px;
  overflow-y: auto;
  margin-top: 10px;
  padding-right: 6px;

  /* Thin scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Scroll thumb */
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }

  /* Hover effect */
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;

export default ExpenseList;