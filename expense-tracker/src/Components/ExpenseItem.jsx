function ExpenseItem ({ title, amount, category}) {
    return (
        <div>
            <h3>Title: {title}</h3>
            <h3>Amount: ₹{amount}</h3>
            <h3>Category: {category}</h3>
            <button>Delete</button>
        </div>
    )
}
export default ExpenseItem;