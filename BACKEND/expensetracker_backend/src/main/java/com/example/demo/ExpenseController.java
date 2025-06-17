package com.example.demo;
 
import com.example.demo.Expense;
import com.example.demo.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
 
import java.util.List;
 
@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "http://localhost:3000")
public class ExpenseController {
    @Autowired
    private ExpenseService expenseService;
 
    @GetMapping
    public List<Expense> getExpenses() { return expenseService.getAllExpenses(); }
 
    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) { return expenseService.addExpense(expense); }
 
    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable Long id) { expenseService.deleteExpense(id); }
    
    @PostMapping("/update")
    public Expense UpdateExpense(@RequestBody Expense expense) {
    	System.out.println(expense);
    	return expenseService.UpdateExpense(expense);
    }
}