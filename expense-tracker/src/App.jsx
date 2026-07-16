import { useState, useEffect } from "react";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import TotalExpense from "./Components/TotalExpense";

function App() {
    const [expenses, setExpenses] = useState(() => {

        const savedExpenses = localStorage.getItem("expenses");

        return savedExpenses
            ? JSON.parse(savedExpenses)
            : [
                {
                    id: 1,
                    title: "Food",
                    amount: 200,
                    category: "Food"
                },
                {
                    id: 2,
                    title: "Travel",
                    amount: 100,
                    category: "Travel"
                }
            ]
    });
    useEffect(() => {

        localStorage.setItem(
            "expenses",
            JSON.stringify(expenses)
        )

    }, [expenses])
    function addExpense(newExpense) {

        setExpenses([
            ...expenses,
            newExpense
        ]);


    }

    function deleteExpense(id) {

        const updatedExpenses = expenses.filter((expense) => {
            return expense.id !== id;
        })
        setExpenses(updatedExpenses);

    }
    return (
        <div className="min-h-screen bg-slate-950 text-white p-6">
            <h1 className="text-4xl font-bold text-center mb-8">
                SpendWise 💰
            </h1>

            <ExpenseForm
                addExpense={addExpense}
            />
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
            <TotalExpense expenses={expenses} />

        </div>
    )

}
export default App;

