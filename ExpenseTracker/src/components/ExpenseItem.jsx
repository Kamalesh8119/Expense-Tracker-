import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  padding: 12px 16px;
  margin-top: 12px;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
const Button = styled.button`
  background: #ff4b2b;
  color: white;
  border: none;
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease;
  
  /* Add this line to create space on the left */
  margin-left: 15px; 

  &:hover {
    background: #ff2e00;
    transform: scale(1.05);
  }
`;

const ExpenseItemWrapper = styled.div`
  background: rgba(255, 255, 255, 0.08);
  padding: 16px;
  margin-top: 15px;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(8px);
  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ExpenseItem = ({ expense, deleteExpense }) => {
  return (
    <Item>
      <div>
        <strong>{expense.title}</strong>
        <p>{expense.category}</p>
        <small>{expense.date}</small>
      </div>
      <div>
        ₹ {expense.amount}
        <Button onClick={() => deleteExpense(expense.id)}>
          X
        </Button>
      </div>
    </Item>
  );
};

export default ExpenseItem;