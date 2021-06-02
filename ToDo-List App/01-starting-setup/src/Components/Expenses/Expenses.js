import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import Card from '../UI/Card';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    function filterChangeHandler(selectedYear){
        setFilteredYear(selectedYear);
        //console.log(selectedYear);
    }

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart Expenses={filteredExpenses} />
            <ExpensesList item={filteredExpenses} />
            
        </Card>
    );
}

export default Expenses;
