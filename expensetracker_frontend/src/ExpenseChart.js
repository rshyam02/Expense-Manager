import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {Pie} from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "./ExpenseChart.css";
 
ChartJS.register(ArcElement,CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



 
const ExpenseChart = () => {
	
	/*<div className="categorydiv">
			 		<div className="Communication">
			 			<img style={{float:"left",height:"50px", width:"50px"}}className="Communicationtotals" src="Communication.png"/>
			 		</div>
			 		<div className="Education">
			 			<img style={{float:"left",height:"50px", width:"50px"}}className="Educationtotals" src="Education.png"/>
			 			
			 		</div>
			 		
			 		<div className="Entertainment">
			 			<img style={{float:"left",height:"50px", width:"50px"}}className="Entertainmenttotals" src="Entertainment.png"/>
			 		</div>
			 		
			 		<div className="Healthy">
			 			<img style={{float:"left",height:"50px", width:"50px"}}className="Healthtotals" src="Healthy.png"/>
			 		</div>
			 		
			 		<div className="Housing">
			 			<img style={{float:"left",height:"50px", width:"50px"}}className="HousingTotals" src="Housing.png"/>
			 		</div>
			 		
			 		<div className="PersonalCare">
			 			<img style={{float:"left",height:"50px", width:"50px"}}className="PersonalCareTotals" src="Personal Care.png"/>
			 		</div>
			 		
			 		<div className="Transport">d
			 			<img style={{float:"left",height:"50px", width:"50px"}}className="TransportTotals" src="Transport.png"/>
			 		</div>
			 		
			 		
			 		
			 	</div>*/
	
	 const [expenses, setExpenses] = useState([]);
	 const [topcategories,setTopcategories]=useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:8080/api/expenses")
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
        setExpenses([]); 
      });
  }, []);
  
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });
    
    
    const [piechart, SetPieChart] =useState({
		labels:[],
		datasets:[]
	});
 
    useEffect(() => {
        axios.get("http://localhost:8080/api/expenses") 
            .then(response => {
                const expenses = response.data;
 
              
                const monthMap = {};
 
                expenses.forEach(expense => {
                    const month = expense.date.substring(0, 7); 
                    if (!monthMap[month]) {
                        monthMap[month] = 0;
                    }
                    monthMap[month] += expense.amount;
                });
 
                const labels = Object.keys(monthMap).sort();
                
                const data = labels.map(label => monthMap[label]);
                
 
                setChartData({
                    labels,
                    datasets: [
                        {
                            label: "Monthly Expenses",
                            data,
                            backgroundColor: "rgba(75, 192, 192, 1)"
                        }
                    ]
                });
                
                const categoryMap={};
                categoryMap["Foods"]=0;
                categoryMap["Transportation"]=0;
                categoryMap["Communication"]=0;
                categoryMap["Housing"]=0;
                categoryMap["PersonalCare"]=0;
                categoryMap["Health"]=0;
                categoryMap["Education"]=0;
                categoryMap["Entertainment"]=0;
                categoryMap["Others"]=0;
                
                expenses.forEach(expense=>{
					const category=expense.category;
					
					categoryMap[category]+=expense.amount;
					
				});
				
				const sortedob=Object.entries(categoryMap).sort(([,a],[,b])=>b-a);
				const top4=sortedob.slice(0,4);
				setTopcategories(top4);
				sortedob.forEach(([category,amount])=>{
					
					console.log(`${category}: ${amount}`);
				});
				const Colors=["rgb(48,25,52)", "#87CEEB",  "#00008B",  "#FF2400", 
  "#800080", 
  "#88E788", 
  "#FFDBBB", 
  "#FFFFC5"]
				const pielabels=Object.keys(categoryMap).sort();
				console.log(pielabels);
				const piedata=pielabels.map(pielabel=>categoryMap[pielabel]);
				console.log(piedata);
				const backgroundcolors = pielabels.map((_,index)=>Colors[index%Colors.length]);
				
				SetPieChart({
					labels:pielabels, 
					datasets:[
						{
							label:"category",
							data:piedata, 
							backgroundColor: backgroundcolors,
							borderColor:"#ffffff",
							borderWidth:1
							
						}
					]
					
				})
            })
            .catch(error => console.error("Error fetching chart data:", error));
    }, []);
 
    return (
		<div className="maindiv">
			<div className="categorydiv">
				{topcategories.map(([category,amount])=>(
					
					<div className={category}>
						<img style={{float:"left",height:"50px",width:"50px"}} className={`${category}Totals`}
							src={`${category}.png`} alt={category}/>
						<div style={{marginTop:"80px",marginLeft:"80px",color:"white"}}>
							${amount.toFixed(2)}
						</div>
					</div>
				))}
			</div>
			 
			 	 
			 	
	    	
			<div className="chartdiv">
				<div className="Expensechartdiv">
			        <div style={{ width: "70%", height:"250px", margin: "0 auto",color:"white" }}>
			            <h3>Expense Chart</h3>
			            <Bar className="expensechart" data={chartData} options={{ responsive: true }} />
			            
			        </div>
			        
			        
		        </div>
		        <div className="PieChartdiv">
					<div style={{width:"70%", margin:"0 auto", color:"white"}}>
			        	<h3>Category-WiseExpenses</h3>
			        	<Pie className="piechart" data={piechart}/>
		       		</div>	        
		        </div>
	        </div>
	       
	        
	        
        </div>
    );
};
 
export default ExpenseChart;
 