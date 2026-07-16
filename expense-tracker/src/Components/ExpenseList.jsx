import ExpenseItem from "./ExpenseItem";
function ExpenseList({ expenses, deleteExpense }) {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {
            expenses.map(
                (expense) => (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        category={expense.category}
                        deleteExpense={deleteExpense}
                    />
                )
            )
        }
    </div>
)
}
export default ExpenseList;