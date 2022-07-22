import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userinput value={},setUserinput value={}]  =
  // useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // });

  const clearEnteredData = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
    // setUserinput value={}({
    //     ...userinput value={},
    //     enteredTitle:event.target.value});
    // setUserinput value={}((prevState) => {
    //     return{...prevState,enteredTitle:event.target.value};
    // })
  };
  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
    // setUserinput value={}({
    //     ...userinput value={},
    //     enteredAmount:event.target.value});
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //     setUserinput value={}({
    //         ...userinput value={},
    //         enteredDate:event.target.value});
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    clearEnteredData();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
