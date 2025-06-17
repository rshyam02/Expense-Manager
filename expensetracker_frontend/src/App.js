
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

//import AddExpense from 'C:/Users/shyamsundhar.r/eclipse-workspace/expensetracker_frontend/src/AddExpense.js';
import React, { useState, useEffect } from "react";
import Menu from './Menu.js'
import "./App.css";

import ExpenseList from "D:/expensetracker_frontend/expensetracker_frontend/src/ExpenseList.js"
import AddExpense from "D:/expensetracker_frontend/expensetracker_frontend/src/AddExpense.js";
import DashBoard from './DashBoard.js';
import ExpenseChart from './ExpenseChart.js';

import axios from "axios";
 
function App() {
    /*const [expenses, setExpenses] = useState([]);
 
    useEffect(() => {
axios.get("http://localhost:8080/api/expenses")
            .then(response => setExpenses(response.data))
            .catch(error => console.error(error));
    }, []);
 
    const addExpense = (expense) => {
axios.post("http://localhost:8080/api/expenses", expense)
            .then(response=>setExpenses(response.data))		  // Adding the new expense to the list
  			 
            .catch(error => console.error(error));
            
            console.log(expenses);
            
           
    };*/
 
    return (
        <div>
        	<menu>
        		<Menu></Menu>
        	</menu>
        	<Routes>
				<Route path="/" element={<Navigate to="/Dashboard" />} />
        		<Route path="/CreateExpense" Component={AddExpense}/>
				<Route path="/Expenses" Component={ExpenseList}/>
        		<Route path="/Dashboard" Component={ExpenseChart}/>
        		
        	</Routes>
        </div>
            
           


            
            
        
    );
}
 
export default App;

/*import React, { useState, useEffect } from "react";
import ExpenseList from "C:/Users/shyamsundhar.r/eclipse-workspace/expensetracker_frontend/src/ExpenseList.js"
import AddExpense from "C:/Users/shyamsundhar.r/eclipse-workspace/expensetracker_frontend/src/AddExpense.js";
 
import axios from "axios";
 
function App() {
  const [expenses, setExpenses] = useState([]);
 
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/expenses")
      .then((response) => setExpenses(response.data))
      .catch((error) => console.error(error));
  }, []);
 
  const handleExpenseAdded = () => {
    axios
      .get("http://localhost:8080/api/expenses")
      .then((response) => setExpenses(response.data))
      .catch((error) => console.error(error));
  };
 
  return (
    <div>
      <h1>Expense Tracker</h1>
      <AddExpense onExpenseAdded={handleExpenseAdded} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}
 
export default App;*/
 