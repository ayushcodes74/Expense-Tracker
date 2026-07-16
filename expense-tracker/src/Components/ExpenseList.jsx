import ExpenseItem from "./ExpenseItem";
function ExpenseList({ expenses }) {
    return (
        <div>
            {
                expenses.map(
                    (expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            category={expense.category}
                        />
                    )
                )
            }
        </div>
    )
}
export default ExpenseList;