import React,{useState,useEffect} from "react";
import axios from "axios";

const DashBoard=()=>{
	const[expenses,setExpenses]=useState([]);
	
		axios.get("http://localhost:8080/api/expenses")
			.then((response) => {
				setExpenses(response.data);
			})
			.catch((error)=>{
				console.log("error",error);
			});
		console.log(expenses);
		
		
	
		
		
	
	return(
		<div>
			 <h2>Expense List</h2>
		      {expenses.length > 0 ? (
				<table className="Expensetable">
					<thead>
						<tr>
							<th>DESCRIPTION</th>
							<th>AMOUNT</th>
							<th>CATEGORY</th> 
							<th>MONTH</th>
						</tr>
					</thead>
					<tbody>
						{expenses.map((expense, index) => (
							<tr key={index}>
								<td>{expense.description}</td>
								<td>{expense.amount}</td>
								<td>{expense.category}</td>
								<td>{expense.date}</td>
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
		
	)
}
export default DashBoard;