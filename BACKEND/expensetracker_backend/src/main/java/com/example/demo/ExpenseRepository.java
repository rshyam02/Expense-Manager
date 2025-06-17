package com.example.demo;
 
import com.example.demo.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
 
public interface ExpenseRepository extends JpaRepository<Expense, Long> {}