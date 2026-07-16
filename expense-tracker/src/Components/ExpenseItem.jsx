function ExpenseItem ({ id, title, amount, category, deleteExpense}) {
    return (
    <div className="bg-slate-900 p-5 rounded-2xl shadow-lg border border-slate-800">

        <h3 className="text-xl font-bold mb-3">
            {title}
        </h3>

        <p className="text-2xl font-bold text-purple-400 mb-2">
            ₹{amount}
        </p>

        <p className="text-slate-300 mb-4">
            Category: {category}
        </p>


        <button
            onClick={() => deleteExpense(id)}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
        >
            Delete
        </button>

    </div>
)
}
export default ExpenseItem;