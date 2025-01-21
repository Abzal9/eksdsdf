// Theme switch functionality
const themeSwitch = document.createElement('div');
themeSwitch.className = 'theme-switch';
themeSwitch.textContent = 'Switch Theme';
document.body.appendChild(themeSwitch);

themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Budget Calculator Script
document.getElementById('financeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const savings = parseFloat(document.getElementById('savings').value);
    const balance = income - expenses;
    const resultElement = document.getElementById('result');
    let savingsLeft = savings - balance;
    if (balance > 0) {
        resultElement.textContent = `Great! You have a positive balance of $${balance.toFixed(2)}. You are on track to reach your savings goal with $${savingsLeft.toFixed(2)} remaining.`;
    } else if (balance === 0) {
        resultElement.textContent = 'You broke even this month. Make sure to save next time!';
    } else {
        resultElement.textContent = `Warning! You have a negative balance of $${Math.abs(balance).toFixed(2)}. You need to cut down on your expenses to meet your savings goal.`;
    }
});
