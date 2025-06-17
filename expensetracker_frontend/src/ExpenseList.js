import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ExpenseList.css";
 
const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [popup,Setpopup]=useState("");
  const [expensedata,SetExpenseData]=useState({
	id:0,
	description:"",
	amount:0,
	category:"",
	date:"",
	
  })
  
  const fetchexpenses=()=>{
	axios.get("http://localhost:8080/api/expenses")
	      .then((response) => {
	        setExpenses(response.data);
	      })
	      .catch((error) => {
	        console.error("Error fetching expenses:", error);
	        setExpenses([]); // Even on error, set it to an empty array
	      });
	
  };
  
  useEffect(() => {
  		fetchexpenses();
      
    }, []);
   
  
  const handleDelete=(id)=>{
	axios.delete(`http://localhost:8080/api/expenses/${id}`)
	.then(()=>{
		fetchexpenses();
		
	});
	
	
	
  }
  
  
  const handleSubmit=(e)=>{
	e.preventDefault();
	const id=expensedata.id;
	const description= expensedata.description;
	const amount=expensedata.amount;
	const category= expensedata.category;
	const date=expensedata.date;
	const expense = {id,description, amount, category, date};
		console.log(expense);

	    axios.post('http://localhost:8080/api/expenses/update', expense)

	      .then((response) => {
	        console.log('expense added');
	      })

	      .catch((error) => console.error(error));
	
	
  }
  
  const handleEdit=(id)=>{
	
	SetExpenseData({...expensedata,id:id})
	

	Setpopup(true);

	
	
	
  }
 
  
  return (
    <div>
      <h2>Expense List</h2>
	  <div className="ExpenseTablediv">
	      {expenses.length > 0 ? (
			<table className="Expensetable">
				<thead>
					<tr>
						<th>DESCRIPTION</th>
						<th>AMOUNT</th>
						<th>CATEGORY</th> 
						<th>MONTH</th>
						<th>ACTION</th>
					</tr>
				</thead>
				<tbody>
					{expenses.map((expense, index) => (
						<tr key={index}>
							<td>{expense.description}</td>
							<td>{expense.amount}</td>
							<td>{expense.category}</td>
							<td>{expense.date}</td>
							<td><button className={'${expense.id}_button'} onClick={()=>handleEdit(expense.id)}>EDIT</button>
							<button className={'${expense.id}_delete'}  onClick={()=>handleDelete(expense.id)}>DELETE</button></td>
						</tr>
					))}
					
					
				</tbody>
			</table>
			/*<ul>
	          {expenses.map((expense, index) => (
	            <li key={index}>
	              {expense.description} - ${expense.amount}- {expense.category} -  {expense.date}
	            </li>
	          ))}
	        </ul>*/
	      ) : (
	        <p>No expenses found.</p>
	      )}

		</div>
			  {popup && (
				<form className="popupform" onSubmit={handleSubmit}>
					<div className="Edittaskpopup">
						<div className="description_div">
					         <label className="description">DESCRIPTION</label>
					         <input
					           className="description"
					           type="text"
					           placeholder="Description"
					           value={expensedata.description}
					           onChange={(e) => SetExpenseData({...expensedata,description:e.target.value})}
					           required
					         />
					       </div>
					       <div className="amount_divpopup">
					         <label className="amount">AMOUNT</label>
					         <input
					           className="amount"
					           type="number"
					           placeholder="Amount"
					           value={expensedata.amount}
					           onChange={(e) => SetExpenseData({...expensedata,amount:e.target.value})}
					           required
					         />
					       </div>

					       <div className="category_divpopup">
					         <label className="category">CATEGORY</label>

					         <div className="selectdiv">
					           <select
					             className="categoryselection"
					             name="category"
					             value={expensedata.category}
					             onChange={(e) => SetExpenseData({...expensedata,category:e.target.value})}
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

					       <div className="datetime_divpopup">
					         <label className="datetime">EXPENSE MONTH</label>
					         <input
					           type="month"
					           placeholder="date"
					           value={expensedata.date}
					           min={`${new Date().getFullYear()}-01`}
					           max={`${new Date().getFullYear()}-12`}
					           onChange={(e) => SetExpenseData({...expensedata,date:e.target.value})}
					           required
					         />
					       </div>
						   <div className="submitbutton">
						   		<button className="submit" type="submit">SUBMIT</button>
								<button className="cancel" type="button" onClick={()=>Setpopup(false)}>CANCEL</button>
						   </div> 
					       
					</div>
				</form>
				
			  )} 
    </div>
  );
};
 
export default ExpenseList;
 