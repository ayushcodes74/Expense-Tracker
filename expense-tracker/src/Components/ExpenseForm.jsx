function ExpenseForm() {
    return (
        <div>
            <label htmlFor="title">Expense Title</label>
            <input type="text" placeholder="Title" id="title"/> 
            <br></br><br></br>
            <label htmlFor="amount">Amount</label>
            <input type="number" placeholder="Amount" id="amount"/>
            <br></br><br></br>
            <label htmlFor="category">Category</label>
            <select name="Category" id="category">
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Shopping">Shopping</option>
                <option value="Others">Others</option>
            </select> 
            <br></br><br></br>
            <button>Add Expense</button>
        </div>
    )
}
export default ExpenseForm;