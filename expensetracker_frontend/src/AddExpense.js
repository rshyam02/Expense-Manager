import React, { useState } from 'react';
import axios from 'axios';
import './AddExpense.css';
const AddExpense = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setdate] = useState('');
  const [expensepurpose, setExpensepurpose] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = { description, amount, category, date, expensepurpose };

    axios
      .post('http://localhost:8080/api/expenses', expense)

      .then((response) => {
        console.log('expense added');
		setSuccessMessage('Expense added successfully!');
		setDescription('');
		setAmount('');
        setCategory('');
        setdate('');
        setExpensepurpose('');
      })

      .catch((error) => console.error(error));
  };

  return (
    <div className="expenseformdiv">
      <form className="expenseform" onSubmit={handleSubmit}>
        <label className="title">New Expense</label>
		{successMessage && <p className="success-message">{successMessage}</p>}

        <div className="description_div">
          <label className="description">DESCRIPTION</label>
          <input
            className="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="amount_div">
          <label className="amount">AMOUNT</label>
          <input
            className="amount"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="category_div">
          <label className="category">CATEGORY</label>

          <div className="selectdiv">
            <select
              className="categoryselection"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Select category{' '}
              </option>
              <option value="Foods">Foods</option>
              <option value="Transportation">Transportation</option>
              <option value="Communication">Communication</option>
              <option value="Housing">Housing</option>
              <option value="PersonalCare">PersonalCare</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Others">others</option>
            </select>
          </div>
        </div>

        <div className="datetime_div">
          <label className="datetime">EXPENSE MONTH</label>
          <input
            type="month"
            placeholder="date"
            value={date}
            min={`${new Date().getFullYear()}-01`}
            max={`${new Date().getFullYear()}-12`}
            onChange={(e) => setdate(e.target.value)}
            required
          />
        </div>
        <div className="expense_div">
          <label className="expense">EXPENSE PURPOSE</label>
          <input
            type="text"
            placeholder="Expense purpose"
            value={expensepurpose}
            onChange={(e) => setExpensepurpose(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Expense</button>
		
		
      </form>
    </div>
  );
};

export default AddExpense;

/*import React, { useState } from "react";
import axios from "axios";
 
const AddExpense = ({ onExpenseAdded }) => { // Accept a callback to notify when an expense is added
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/expenses", {
        description,
        amount,
        category,
        date: new Date(),
      })
      .then(() => {
        setDescription("");
        setAmount("");
        setCategory("");
        if (onExpenseAdded) {
          onExpenseAdded(); // Call the callback to refetch the expenses
        }
      })
      .catch((error) => console.error(error));
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};
 
export default AddExpense;
 */
