const ctx = document.getElementById('tokenomicsChart').getContext('2d');

const data = {
  labels: ['Liquidity', 'Burn', 'Rewards', 'Development', 'Marketing & Memes'],
  datasets: [{
    data: [40, 10, 20, 15, 15],
    backgroundColor: [
      '#00fff7', // Liquidity - azul turquesa claro
      '#ff0080', // Burn - rosa vibrante
      '#0d9aff', // Rewards - azul vibrante
      '#adcf00', // Development - verde-limão
      '#ff358f'  // Marketing & Memes - rosa forte
    ],
    borderColor: '#111',
    borderWidth: 2,
    hoverOffset: 30
  }]
};

const config = {
  type: 'pie',
  data,
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: '#111',
        titleColor: '#00fff7',
        bodyColor: '#fff',
        borderColor: '#00fff7',
        borderWidth: 1,
      }
    }
  }
};

const tokenomicsChart = new Chart(ctx, config);
