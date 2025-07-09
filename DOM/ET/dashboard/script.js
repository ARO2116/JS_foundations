document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const transactionForm = document.getElementById('transaction-form');
    const amountInput = document.getElementById('amount');
    const typeSelect = document.getElementById('type');
    const dateInput = document.getElementById('date');
    const descriptionInput = document.getElementById('description');
    const transactionTable = document.getElementById('transaction-table');
    const filterType = document.getElementById('filter-type');
    const searchInput = document.getElementById('search');
    const filterDate = document.getElementById('filter-date');
    const balanceDisplay = document.getElementById('balance');
    const incomeDisplay = document.getElementById('income');
    const expenseDisplay = document.getElementById('expense');
    const exportBtn = document.getElementById('export-btn');
    const clearFormBtn = document.getElementById('clear-form');
    
    // Sample data (would normally come from API)
    let transactions = [
        { id: 1, amount: 1000, type: 'income', date: '2025-07-08', description: 'Salary payment' },
        { id: 2, amount: 500, type: 'expense', date: '2025-07-07', description: 'Grocery shopping' },
        { id: 3, amount: 200, type: 'expense', date: '2025-07-06', description: 'Taxi fare' },
        { id: 4, amount: 1500, type: 'income', date: '2025-07-06', description: 'Freelance project' },
        { id: 5, amount: 120, type: 'expense', date: '2025-07-05', description: 'Coffee & snacks' },
        { id: 6, amount: 2000, type: 'income', date: '2025-07-05', description: 'Bonus' },
        { id: 7, amount: 400, type: 'expense', date: '2025-07-04', description: 'Internet bill' },
        { id: 8, amount: 700, type: 'expense', date: '2025-07-04', description: 'Groceries' },
        { id: 9, amount: 3000, type: 'income', date: '2025-07-03', description: 'Client retainer' },
        { id: 10, amount: 180, type: 'expense', date: '2025-07-03', description: 'Gym membership' }
    ];

    // Initialize the app
    function init() {
        renderTransactions();
        updateSummary();
        setupEventListeners();
        setDefaultDate();
    }

    // Set today's date as default for date inputs
    function setDefaultDate() {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
        dateInput.min = '2000-01-01';
        dateInput.max = today;
        filterDate.value = today;
        filterDate.max = today;
    }

    // Set up event listeners
    function setupEventListeners() {
        transactionForm.addEventListener('submit', handleFormSubmit);
        clearFormBtn.addEventListener('click', resetForm);
        filterType.addEventListener('change', filterTransactions);
        searchInput.addEventListener('input', filterTransactions);
        filterDate.addEventListener('change', filterTransactions);
        exportBtn.addEventListener('click', exportToCSV);
        
        // Add click event for view buttons (event delegation)
        transactionTable.addEventListener('click', function(e) {
            if (e.target.closest('.view-btn')) {
                const id = parseInt(e.target.closest('tr').dataset.id);
                viewTransactionDetails(id);
            }
            
            if (e.target.closest('.delete-btn')) {
                const id = parseInt(e.target.closest('tr').dataset.id);
                deleteTransaction(id);
            }
        });
    }

    // Handle form submission
    function handleFormSubmit(e) {
        e.preventDefault();
        
        // Validate form
        if (!amountInput.value || !typeSelect.value) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Create new transaction
        const newTransaction = {
            id: transactions.length > 0 ? Math.max(...transactions.map(t => t.id)) + 1 : 1,
            amount: parseFloat(amountInput.value),
            type: typeSelect.value,
            date: dateInput.value || new Date().toISOString().split('T')[0],
            description: descriptionInput.value || 'No description'
        };
        
        // Add to transactions array
        transactions.unshift(newTransaction);
        
        // Update UI
        renderTransactions();
        updateSummary();
        resetForm();
        
        // Show success message
        showToast('Transaction added successfully!', 'success');
    }

    // Reset form
    function resetForm() {
        transactionForm.reset();
        setDefaultDate();
        amountInput.focus();
    }

    // Render transactions table
    function renderTransactions(data = transactions) {
        const tbody = transactionTable.querySelector('tbody');
        tbody.innerHTML = '';
        
        if (data.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" class="py-4 text-center text-gray-400">
                        No transactions found
                    </td>
                </tr>
            `;
            return;
        }
        
        data.forEach(transaction => {
            const row = document.createElement('tr');
            row.className = `hover:bg-gray-800/50 transition ${transaction.type}-bg`;
            row.dataset.id = transaction.id;
            
            row.innerHTML = `
                <td class="py-3 px-4">${transaction.id}</td>
                <td class="py-3 px-4 font-medium ${transaction.type === 'income' ? 'text-green-400' : 'text-red-400'}">
                    ${transaction.type === 'income' ? '+' : '-'} $${transaction.amount.toFixed(2)}
                </td>
                <td class="py-3 px-4">${formatDate(transaction.date)}</td>
                <td class="py-3 px-4">
                    <span class="px-2 py-1 text-xs rounded-full ${transaction.type === 'income' ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}">
                        ${transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                    </span>
                </td>
                <td class="py-3 px-4">${transaction.description}</td>
                <td class="py-3 px-4 flex gap-2">
                    <button class="view-btn text-gray-400 hover:text-green-400 transition">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                    </button>
                    <button class="delete-btn text-gray-400 hover:text-red-400 transition">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                    </button>
                </td>
            `;
            
            tbody.appendChild(row);
        });
    }

    // Filter transactions
    function filterTransactions() {
        const type = filterType.value;
        const searchTerm = searchInput.value.toLowerCase();
        const date = filterDate.value;
        
        let filtered = [...transactions];
        
        if (type && type !== 'all') {
            filtered = filtered.filter(t => t.type === type);
        }
        
        if (searchTerm) {
            filtered = filtered.filter(t => 
                t.description.toLowerCase().includes(searchTerm) || 
                t.amount.toString().includes(searchTerm)
            );
        }
        
        if (date) {
            filtered = filtered.filter(t => t.date === date);
        }
        
        renderTransactions(filtered);
    }

    // Update summary cards
    function updateSummary() {
        const income = transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);
            
        const expenses = transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);
            
        const balance = income - expenses;
        
        balanceDisplay.textContent = `$${balance.toFixed(2)}`;
        incomeDisplay.textContent = `$${income.toFixed(2)}`;
        expenseDisplay.textContent = `$${expenses.toFixed(2)}`;
    }

    // View transaction details
    function viewTransactionDetails(id) {
        const transaction = transactions.find(t => t.id === id);
        if (!transaction) return;
        
        // In a real app, this would open a modal with more details
        showToast(`Viewing transaction #${id}: ${transaction.description}`, 'info');
        console.log('Transaction details:', transaction);
    }

    // Delete transaction
    function deleteTransaction(id) {
        if (!confirm('Are you sure you want to delete this transaction?')) return;
        
        transactions = transactions.filter(t => t.id !== id);
        renderTransactions();
        updateSummary();
        showToast('Transaction deleted successfully!', 'success');
    }

    // Export to CSV
    function exportToCSV() {
        const headers = ['ID', 'Amount', 'Type', 'Date', 'Description'];
        const csvContent = [
            headers.join(','),
            ...transactions.map(t => 
                [t.id, t.amount, t.type, t.date, `"${t.description}"`].join(',')
            )
        ].join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `transactions_${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
        
        showToast('Export started successfully!', 'success');
    }

    // Helper function to format date
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    // Show toast notification
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `fixed top-4 right-4 px-4 py-2 rounded-md shadow-lg text-white ${
            type === 'success' ? 'bg-green-600' : 
            type === 'error' ? 'bg-red-600' : 
            'bg-blue-600'
        }`;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('opacity-0', 'transition-opacity', 'duration-300');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Initialize the app
    init();
});