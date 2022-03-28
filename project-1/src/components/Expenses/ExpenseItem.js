import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props){

    let [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle("Updated!");
        console.log("Updated !")
    }

    return (
        <Card className='expense-item'>
            <ExpensesDate date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;