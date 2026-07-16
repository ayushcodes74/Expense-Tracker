import { useState } from "react";

function ExpenseForm({ addExpense }) {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("Food")

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }
    function handleAmountChange(event) {
        setAmount(event.target.value);
    }
    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }
    function handleSubmit() {
        const newExpense = {
            id: Date.now(),
            title,
            amount: Number(amount),
            category
        }
        addExpense(newExpense);
        setTitle("");
        setAmount("");
        setCategory("Food");
    }
    return (
        <div className="max-w-md mx-auto bg-slate-900 p-6 rounded-2xl shadow-lg mb-8">

            <h2 className="text-2xl font-bold mb-5 text-center">
                Add Expense
            </h2>

            <div className="space-y-4">

                <div>
                    <label className="block mb-1">
                        Expense Title
                    </label>

                    <input
                        type="text"
                        placeholder="Enter expense title"
                        id="title"
                        onChange={handleTitleChange}
                        value={title}
                        className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>


                <div>
                    <label className="block mb-1">
                        Amount
                    </label>

                    <input
                        type="number"
                        placeholder="Enter amount"
                        id="amount"
                        onChange={handleAmountChange}
                        value={amount}
                        className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>


                <div>
                    <label className="block mb-1">
                        Category
                    </label>

                    <select
                        id="category"
                        onChange={handleCategoryChange}
                        value={category}
                        className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
                    >
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Others">Others</option>

                    </select>

                </div>


                <button
                    onClick={handleSubmit}
                    className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded-lg font-semibold transition"
                >
                    + Add Expense
                </button>

            </div>

        </div>
    )

}
export default ExpenseForm;