// chartUtils.js

import Chart from 'chart.js/auto';

export const initializeCharts = (chartRefs) => {
  const [chartRef1, chartRef2] = chartRefs;

  // Sample data for line chart (replace with your actual data)
  const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 20, 81, 56, 55, 40],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: '#433D8B',
        borderWidth: 1,
      },
    ],
  };

  // Line chart configuration
  const config1 = {
    type: 'line',
    data: data1,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const data2 = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: ['#433D8B', '#2E236C', '#17153B'],
        hoverOffset: 4,
      },
    ],
  };

  const config2 = {
    type: 'pie',
    data: data2,
  };

  let myChart1, myChart2;

  if (chartRef1.current && chartRef2.current) {
    myChart1 = new Chart(chartRef1.current, config1);
    myChart2 = new Chart(chartRef2.current, config2);
  }

  return () => {
    if (myChart1) myChart1.destroy();
    if (myChart2) myChart2.destroy();
  };
};
