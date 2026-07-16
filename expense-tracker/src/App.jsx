import { useState } from "react";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import TotalExpense from "./Components/TotalExpense";

function App() {
    const [expenses,setExpenses] = useState([ {
      id:1,
      title:"Food",
      amount:200,
      category:"Food"
   },
   {
      id:2,
      title:"Travel",
      amount:100,
      category:"Travel"
   }])
      return (
        <>
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
        <TotalExpense />
        </>
      )

}
export default App;

