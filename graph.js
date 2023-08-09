const ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'pie',
      data: {
  labels: [
    'Unsubscribe',
    'Bounce',
    'Open'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      '#FF2E2E',
      '#FFFF2E',
      '#2EFFFF'
    ],
    borderColor:"black",
    borderWidth: 0.5,
    hoverOffset: 4,
  }]
},
options:{
  color:"white",
}
});


const ctx2 = document.getElementById('myChart2');
// const labels = Utils.months({count: 7});
// console.log('labels:',labels)
    new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ["1:30","4:30","6:00","8:30","11:30","15:00","20:30"],
        datasets: [{
          label: 'Open',
          data: [65, 59, 80, 46, 56, 55, 40],
          fill: true,
          borderColor: '#FF00FF',
          tension: 0.1
        },
        {
          label: 'Click',
          data: [60, 45, 20, 46, 52, 55, 35],
          fill: true,
          borderColor: '#00FF00',
          tension: 0.1
        }]
},
options:{
  color:"white",
}
});


const ctx3 = document.getElementById('myChart3');
// const labels = Utils.months({count: 7});
// console.log('labels:',labels)
    new Chart(ctx3, {
      type: 'bar',
      data: {
        labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
        datasets: [{
          label: 'Tesla',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor:'rgba(153, 102, 255, 0.2)',  
borderColor: 'rgb(153, 102, 255)',
borderWidth: 1,
}],
},
options:{
  color:"white",
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});
console.log('succesfull');


