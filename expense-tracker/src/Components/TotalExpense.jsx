function TotalExpense({ expenses }) {
    const total = expenses.reduce((acc, expense) => {
        return acc + expense.amount;
    }, 0);
    return (
        <div className="max-w-3xl mx-auto mt-8 bg-purple-600 p-8 rounded-2xl shadow-lgflexjustify-betweenitems-center">

            <h2 className="text-xl font-semibold">
                Total Spending 💰
            </h2>

            <h1 className="text-4xl font-bold mt-3">
                ₹{total}
            </h1>

            <p className="mt-2 text-purple-200">
                Your total expenses so far
            </p>

        </div>
    )
}
export default TotalExpense;