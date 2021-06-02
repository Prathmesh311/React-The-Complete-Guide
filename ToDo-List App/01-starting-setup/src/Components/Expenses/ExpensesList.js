import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {

    return(
        <ul className="expenses-list">
            {props.item.length === 0 && <p>No Expenses Found</p>}
            {props.item.length > 0   && props.item.map(expense => (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
}

export default ExpensesList;