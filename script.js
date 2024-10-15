// Chart.js to create the bar graph for income/expense
var ctx = document.getElementById('incomeExpenseChart').getContext('2d');
var incomeExpenseChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Income',
            data: [2000, 3000, 4000, 7000, 700, 5000, 2000, 3000, 1000, 4000, 3000, 5000],
            backgroundColor: '#4fd1c5'
        }, {
            label: 'Expense',
            data: [1000, 2000, 3000, 4000, 2000, 1000, 5000, 2000, 3000, 2000, 4000, 1000],
            backgroundColor: '#f56565'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

