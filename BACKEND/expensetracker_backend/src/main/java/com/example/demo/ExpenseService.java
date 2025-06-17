//package com.example.demo;
// 
//import com.example.demo.Expense;
//import com.example.demo.ExpenseRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import java.util.List;
// 
//@Service
//public class ExpenseService {
//    @Autowired
//    private ExpenseRepository expenseRepository;
// 
//    public List<Expense> getAllExpenses() { return expenseRepository.findAll(); }
//    public Expense addExpense(Expense expense) { return expenseRepository.save(expense); }
//    public void deleteExpense(Long id) { expenseRepository.deleteById(id); }
//}

package com.example.demo;
 
import com.example.demo.Expense;
import com.example.demo.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
 
@Service
public class ExpenseService {
    @Autowired
    private ExpenseRepository expenseRepository;
 
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }
 
    public Expense addExpense(Expense expense) {
        Expense savedExpense = expenseRepository.save(expense);
        System.out.println("Saved Expense: " + savedExpense); // Log the saved expense
        return savedExpense;
    }
 
    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);
    }
    public Expense UpdateExpense(Expense updatedexpense) {
    	Expense existingexpense= expenseRepository.findById(updatedexpense.getId()).get();
    	existingexpense.setDescription(updatedexpense.getDescription());
    	existingexpense.setAmount(updatedexpense.getAmount());
    	existingexpense.setCategory(updatedexpense.getCategory());
    	existingexpense.setDate(updatedexpense.getDate());
    	
    	return expenseRepository.save(existingexpense);
    	
    }
    

}
 

