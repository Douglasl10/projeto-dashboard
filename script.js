const themeToggle = document.getElementById('toggleTheme');
const themeIcon = document.getElementById('themeIcon');

themeToggle.addEventListener('click', function(){
  document.body.classList.toggle('light-mode');

  if(document.body.classList.contains('light-mode')){
    themeIcon.textContent = '🌞'; 
  } else {
    themeIcon.textContent = '🌙'; 
  }
});

const ctx = document.getElementById('analyticsChart').getContext('2d');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Gastos', 'Entradas', 'Saidas'],
        datasets: [{
            label: 'Analytics',
            data: [30, 50, 20],
            backgroundColor: ['#ea1111', '#13cb26', '#f1c40f'],
            borderColor: '#000',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {color: "white"}
            },
            tooltip: {enabled: true}
        }
    }
});

const ctx2 = document.getElementById('transfersChart').getContext('2d');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Bitcoin', 'Real'],
        datasets:[{
            label: 'Transferencias',
            data: [83769.1, 248989.0],
            backgroundColor: ['#f39c12','#2980b9'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {beginAtZero: true}
        },
        plugins: {
            legend: {display: false},
            tooltip: {enabled: true}
        }
    }
})